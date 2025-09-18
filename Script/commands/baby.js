const axios = require('axios');

const baseApiUrl = async () => {
 const base = await axios.get(`https://raw.githubusercontent.com/Mostakim0978/D1PT0/refs/heads/main/baseApiUrl.json`);
 return base.data.api;
};

module.exports.config = {
 name: "baby",
 version: "7.0.0",
 credits: "dipto", //modified by SHAHADAT SAHU
 cooldowns: 0,
 hasPermssion: 0,
 description: "better than all sim simi",
 commandCategory: "chat",
 category: "chat",
 usePrefix: true,
 prefix: true,
 usages: "[anyMessage]"
};

module.exports.run = async function ({ api, event, args }) {
 try {
 const link = `${await baseApiUrl()}/baby`;
 const dipto = args.join(" ").toLowerCase();
 const uid = event.senderID;

 if (!args[0]) {
 const ran = ["Bolo baby", "hum", "type help baby", "type !baby hi"];
 return api.sendMessage(ran[Math.floor(Math.random() * ran.length)], event.threadID, event.messageID);
 }

 const a = (await axios.get(`${link}?text=${encodeURIComponent(dipto)}&senderID=${uid}&font=1`)).data.reply;
 return api.sendMessage(a, event.threadID, (error, info) => {
 global.client.handleReply.push({
 name: this.config.name,
 type: "reply",
 messageID: info.messageID,
 author: event.senderID,
 lnk: a,
 apiUrl: link
 });
 }, event.messageID);

 } catch (e) {
 console.error('Error in command execution:', e);
 return api.sendMessage(`Error: ${e.message}`, event.threadID, event.messageID);
 }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
 try {
 if (event.type === "message_reply") {
 const reply = event.body.toLowerCase();
 const link = `${await baseApiUrl()}/baby`;
 const b = (await axios.get(`${link}?text=${encodeURIComponent(reply)}&senderID=${event.senderID}&font=1`)).data.reply;
 return api.sendMessage(b, event.threadID, (error, info) => {
 global.client.handleReply.push({
 name: this.config.name,
 type: "reply",
 messageID: info.messageID,
 author: event.senderID,
 lnk: b
 });
 }, event.messageID);
 }
 } catch (err) {
 return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
 }
};

module.exports.handleEvent = async function ({ api, event }) {
 try {
 const body = event.body ? event.body.toLowerCase() : "";
 const keywords = ["baby", "bby", "bot", "babu", "bepi", "jaan", "janu", "xan", "বট", "বেবি", "জানু"];

 if (keywords.some(word => body.startsWith(word))) {
 const arr = body.replace(/^\S+\s*/, "");
 const link = `${await baseApiUrl()}/baby`;
 
 if (!arr) {
 const randomTexts = [
 "বেশি bot Bot করলে উম্মা দিয়ে দিব কিন্তু😘😐", 
 "শুনবো না😼 তুমি আমার বস সুমি কে প্রেম করাই দাও নাই🥺পচা তুমি🥺", 
 "আমি আবাল দের সাথে কথা বলি না,ok😒", 
 "এতো ডেকো না আমায়,আমার বস সুমি কে দেখলে প্রেমে এ পরে যাবে তো🙈", 
 "Bolo Babu, তুমি কি আমার বস সুমি কে ভালোবাসো? 🙈💋", 
 "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", 
 "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?", 
 "এতো ডাকছিস কেন?আমার বেস্টু আবির আসলে কিন্তু গালি শুনিয়ে দিব? 🤬", 
 "I love you janu🥰", 
 "আরে Bolo আবির এর বউ ,আমার ভাবি কেমন আছো?🙊💝", 
 "Bot বলে অসম্মান করছি,😰😿", 
 "𝗛𝗼𝗽 𝗯𝗲𝗱𝗶😾,𝗯𝗼𝘀𝘀 সুমি 𝗯𝗼𝗹😼", 
 "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু", 
 "আমাকে না ডেকে ছেলে হলে বস সুমির ইনবক্সে চলে যা 🌚😂 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/share/1E6Zg1w6tu/", 
 "Bot না , জানু বল জানু 😘", 
 "বার বার Disturb করছিস কোনো😾,আমার সুমি জানুর সাথে ব্যাস্ত আছি😋", 
 "আরে বলদ এতো ডাকিস কেন🤬", 
 "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘", 
 "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒আবির কে ডাক", 
 "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘", 
 "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস 😉😋🤣", 
 "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂", 
 "আমাকে ডেকো না,আমি বস সুমির সাথে চিপা  আছি", 
 "কি হলো , মিস্টেক করচ্ছিস নাকি🤣", 
 "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏", 
 "জান মেয়ে হলে বস সুমির ইনবক্সে চলে যাও 😍🫣💕 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/share/1E6Zg1w6tu/", 
 "কালকে দেখা করিস আমার বেস্টু আবির অফিসে 😈", 
 "হ্যা বস সুমি বলেন, শুনছি আমি 🙃", 
 "আর কত বার ডাকবি ,আমি চিপা বিজি আছি", 
 "হুম বাবুর আব্বু  কি বলবে😒", 
 "চল কাজি অফিসে বিয়ে করব তোকে🫵😘", 
 "আমি তো অন্ধ কিছু দেখি না🐸 😎", 
 "Bot না বলে,বাবু বল 😌", 
 "বলো ম্যাম কি করতে পারি আপনার জন্য🌚", 
 "তোর কি চোখে পড়ে না আমি আমার বেস্টুর সাথে ব্যাস্ত আছি😒", 
 "হুম জান তোমার ওই খানে উম্মহ😑😘", 
 "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘", 
 "𝗝𝗮𝗻 𝗯𝗮𝗹 𝗳𝗮𝗹𝗮𝗯𝗮 𝗲𝘁𝗼 𝗯𝗼𝘁 𝗯𝗼𝘁 𝗸𝗼𝗿𝗼 𝗸𝗻😒😬", 
 "হুম জান তোমার অইখানে উম্মমাহ😷😘", 
 "আসসালামু আলাইকুম বলেন ম্যাম আপনার জন্য আমার বেস্টু আবির ২৪ ঘন্টা রেডি আছে.!🥰", 
 "ভালোবাসার নামক আবলামি করতে চাইলে বস সুমির ইনবক্সে গুতা দিন ~🙊😘🤣 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/share/1E6Zg1w6tu/", 
 "আমাকে এতো না ডেকে বস সুমি কে একটা জামাই দে 🙄", 
 "আমাকে এতো ডাকছো কেন আমার বস সুমি কে ভলো টালো বাসো নাকি🤭🙈", 
 "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻", 
 "আমি এখন বেস্টু সুমির সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻", 
 "আমাকে না ডেকে আমার বস সুমি কে একটা বি এফ দাও-😽🫶🌺", 
 "ঝাং থুমালে আইলাপিউ পেপি-💝😽", 
 "উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡তোর বউকে দিবি আমার বেস্টু আবির কে😈😈", 
 "জান তোমার বান্ধবী রে আমার বেস্টু আবিরের হাতে তুলে দিবা-🙊🙆‍♂", 
 "আজকে সুমির মন ভালো নেই তাই আমারে ডাকবেন না-আবির কে ডাকুন😪🤧", 
 "ঝাং রিতু🫵থুমালে য়ামি রাইতে পালুবাসি উম্মম্মাহ-🌺🤤💦", 
 "চুনা ও চুনা আমার আমার বেস্টু আবির এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭", 
 "স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻অপ্রিয় সুমি✍️", 
 "জান হাঙ্গা করবা-🙊😝আমার বস সুমি কে🙃", 
 "জান ছেলে হলে চিপায় আসো বস সুমি ইউটিউব দিখিয়ে অনেক ভালোবাসা শিখছে তোমার জন্য-🙊🙈😽", 
 "ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼", 
 "আমার বস সুমির পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস সুমি 'র জন্য দোয়া করবেন-💝💚🌺🌻", 
 "- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস সুমি এর ইনবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/share/1E6Zg1w6tu/", 
 "ওই মেয়ে তুমি কি আমার বেস্টু আবির কে  ভালোবাসো-💝🌺😽", 
 "কিরে প্রেম করবি তাহলে আমার বেস্টুর ইনবক্সে গুতা দে 😘🤌 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/share/17WvWAhBvv/ ", 
 "জান আমার বস সুমি কে বিয়ে করবা-🙊😘🥳", 
 "-আন্টি-🙆-আপনার ছেলে👰‍♀️-রাতে আমার বস সুমি কে ভিদু কল দিতে বলে🫣-🥵🤤💦", 
 "oii প্রিয়-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂", 
 "-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বেস্টু আবির কে দান করেন-🥱🐰🍒", 
 "-ও পাখি ও পাখি-😇-তুমি কেন আমার বেস্টু আবির কে দিয়ে গেলা ফাকি-🌚🫵😾", 
 "-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস সুমি কে-🐸😾🔪", 
 "-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে বলছি বন্ধুর  𝗕𝗼𝘂 মানে আবির এর যৌবনে শান্তি-🐸🤦‍♂🤧", 
 "-𝗢𝗶𝗶 আন্টি-🙆‍♂️-আপনার ছেলে😏 খালি চোখ মারে-🥺🥴🐸", 
 "তাকাই আছো কেন চুমু দিবা-🙄🐸😘", 
 "আজকে বস সুমি কে প্রপোজ করে দেখো রাজি হইয়া যাবে-😌🤗😇", 
 "-আমার গল্পে আবির এর নানা  সেরা-রে-🙊🙆‍♂️🤗", 
 "কি বেপার বেস্টু আমার শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻", 
 "দিনশেষে আমার বেস্টুর আবির এর কাছে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧", 
 "-তাবিজ কইরা হইলেও বস সুমিকে একটা ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻", 
 "-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন ইউটিউবে ভিডিও দেখে কাহিনী অন্যরকম-😦🙂🌻", 
 "প্রেম করতে চাইলে বস সুমির ইনবক্সে চলে যা 😏🐸 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/share/1E6Zg1w6tu/", 
 "-আজ একটা বিন🎷 নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বেস্টু আবির ধরতে পারছে না-🐸🥲", 
 "-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️আবির বিড়ি কি জিনিস জানেই না🤣", 
 "—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বেস্টু আবির এর সাথে প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗", 
 "—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস সুমি এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️", 
 "-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜", 
 "সুন্দর মাইয়া মানেই-🥱আমার বেস্টু আবির এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗", 
 "এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂অপ্রিয় আবির", 
 "-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸আবির বেস্টু🐸", 
 "ভালোবাসার নামক আবলামি করতে চাইলে বস সুমির ইনবক্সে গুতা দিন🤣😼", 
 "ছেলে হলে বস সুমির ইনবক্সে চলে যা 🤭🤣😼 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/share/1E6Zg1w6tu/", 
 "হুদাই তোমারে🐰 শয়তানে লারে-😝😑☹️", 
 "-𝗜 𝗟𝗩O𝗘 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸", 
 "-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦", 
 "-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧", 
 "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আবির তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱", 
 "-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋", 
 "-ইস সেই দিন রাতে-🙂-আমার বেস্টু আবির দিছিলো আমারে থাপ্পর👋-🥹", 
 "-ওই বেডি তোমার বাসায় না আমার বেস্টু আবির মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বেস্টু আবির কে জানে মারার কি দরকার-🙄🤧", 
 "-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅অপ্রিয় সুমি", 
 "-হুদাই গ্রুপে আছি-🥺🐸-কেও বস সুমির ইনবক্সে নক দিয়ে বলে না জান তোমার বেস্টুকে আমি অনেক ভালোবাসি-🥺🤧", 
 "কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦", 
 "-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস সুমি এর মনটা ছাড়া-🥴😑😏", 
 "-🫵সুমি তোমারে পছন্দ করে -😽-সময় মতো প্রপোজ করবে বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵", 
 "-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমার বেস্টু আবির ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸"
 ];

 const msg = randomTexts[Math.floor(Math.random() * randomTexts.length)];
 return api.sendMessage(msg, event.threadID, (error, info) => {
 global.client.handleReply.push({
 name: this.config.name,
 type: "reply",
 messageID: info.messageID,
 author: event.senderID
 });
 }, event.messageID);
 }

 const a = (await axios.get(`${link}?text=${encodeURIComponent(arr)}&senderID=${event.senderID}&font=1`)).data.reply;
 return api.sendMessage(a, event.threadID, (error, info) => {
 global.client.handleReply.push({
 name: this.config.name,
 type: "reply",
 messageID: info.messageID,
 author: event.senderID,
 lnk: a
 });
 }, event.messageID);
 }
 } catch (err) {
 return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
 }
};
