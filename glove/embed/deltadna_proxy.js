var deltadnaProxy = function()
{
	return {
		sendEvent : function(pUrl, pData)
		{
			var data = JSON.stringify(pData);
			var xhr;
			if(window.XMLHttpRequest) { xhr = new XMLHttpRequest(); }
			else { xhr = new ActiveXObject("Microsoft.XMLHTTP"); }
			xhr.open("POST", pUrl, true);
			xhr.setRequestHeader("Content-Type", "application/json");
	        xhr.send(data);
		}
		,
		getChannel : function()
		{
			var channel = "";
			var useragent = navigator.userAgent.toLowerCase();
			var tRef = document.referrer.toLowerCase();
			if(tRef =="" && (useragent.indexOf("ipod") != -1 || useragent.indexOf("iphone") != -1 || useragent.indexOf("ipad") != -1) && useragent.indexOf("safari") == -1) { channel = "IOS_MOBILEAPP"; }
			else if (tRef.indexOf("http://www.ludei.com") != -1) { channel = "ANDROID_MOBILEAPP"; }
			else if (tRef.indexOf("www.nick") != -1) { channel = "nick.com"; }
			else if (tRef.indexOf("m.nick") != -1) { channel = "m.nick.com"; }
			else if (tRef.indexOf("t.nick") != -1) { channel = "t.nick.com"; }
			return chanel;
		}
		,
		getPlatform : function()
		{
			var platform = "UNKNOWN";
			try
			{
				var tUrl = window.top.location.href.toLowerCase();
				var useragent = navigator.userAgent.toLowerCase();
				var tRef = document.referrer.toLowerCase();
				if(tUrl.indexOf("t.nick") != -1 || useragent.indexOf("ipad") != -1 || useragent.indexOf("tablet") != -1 || (useragent.indexOf("android") != -1 && useragent.indexOf("mobi") == -1)) { platform = "NICKWEB_TABLET"; }
				else if(tUrl.indexOf("m.nick") != -1 || useragent.indexOf("mobi") != -1) { platform = "NICKWEB_MOBILE"; }
				else if(tUrl.indexOf("www.nick") != -1) { platform = "NICKWEB_DESKTOP"; } 
				
				if (useragent.indexOf("android") != -1 && tRef.indexOf("http://www.ludei.com") != -1) { platform = "ANDROID_APP"; }
				else if ((useragent.indexOf("ipod") != -1 || useragent.indexOf("iphone") != -1 || useragent.indexOf("ipad") != -1) && useragent.indexOf("safari") == -1) { platform = "IOS_APP"; }
				
				if(tUrl.indexOf(".nick") == -1) { platform = "UNKNOWN"; } 
				if(tUrl.indexOf("nick.com/games/data/") != -1) { platform = "UNKNOWN"; }
			} catch(error) {
			}
			return platform;
		}
		,
		getInfo : function()
		{
			var deviceType = "UNKNOWN";
			var operatingSystem = "UNKNOWN";
			var os = "UNKNOWN";
			var operatingSystemVersion = "UNKNOWN";
			var hardwareVersion = "UNKOWN";
			var manufacturer = "";
			try {
				var parser = new UAParser();
				var result = parser.getResult();
				
				var useragent = result.ua.toUpperCase();
				var platform = navigator.platform.toUpperCase();
				
				// deviceType
				if (platform.match(/TV/i)) { deviceType ="TV"; }
				else if (useragent.match(/IPAD/i) || (useragent.match(/ANDROID/i) && useragent.indexOf("MOBI") == -1)) { deviceType = "TABLET"; }
				else if(useragent.indexOf("MOBI") != -1) { deviceType = "MOBILE_PHONE"; }
				else { deviceType = "PC"; }
	
				//operatingSystem
				//os
				os = result.os.name;
				if (os.match(/WINDOWS/i)) { operatingSystem="WINDOWS"; }
				else if (os.match(/MAC/i)) { operatingSystem="OSX"; }
				else if (os.match(/ANDROID/i)) { operatingSystem="ANDROID"; }
				else if (os.match(/IOS/i)|| useragent.match(/IPHONE/i) || useragent.match(/IPAD/i) || useragent.match(/IPOD/i)) { operatingSystem="IOS"; }
				else if (useragent.match(/BLACKBERRY/i)) { operatingSystem="BLACKBERRY"; }
				else if (useragent.indexOf("LINUX")!=-1) { operatingSystem="LINUX"; }
				else if (/\bSILK\b/.test(navigator.userAgent)) { operatingSystem="FIREOS"; }
	
				operatingSystemVersion = result.os.version;
	
				// hardware version
				// manufacturer
				if(deviceType == "PC" && operatingSystem == "OSX") { hardwareVersion = "MAC"; }
				else if(deviceType == "PC") { hardwareVersion = "PC"; }
				else {
					hardwareVersion = result.device.model;
					manufacturer = result.device.vendor;
				}
			} catch (e) {
			}
			
			var timezoneOffset = "";
			var d = new Date()
			var offset = d.getTimezoneOffset() / 60;
			offset *= -1;
			var offsetMod = Math.abs(offset % 1);
			offsetMod *= 60;
			offset = offset | 0;
			timezoneOffset += (offset) > 0 ? "+" : "-";
			timezoneOffset += Math.abs(offset) < 10 ? "0" : "";
			timezoneOffset += Math.abs(offset) + ":";
			timezoneOffset += offsetMod < 10 ? "0" : "";
			timezoneOffset += offsetMod;
			
			return deviceType + "," + operatingSystem + "," + operatingSystemVersion + "," + timezoneOffset + "," + hardwareVersion + "," + manufacturer;
		}
	};
}();

