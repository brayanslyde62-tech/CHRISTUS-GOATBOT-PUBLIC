const ping = require('ping');

// Tableau de tes images Sae Itoshi
const SAE_IMAGES = [
  "https://i.ibb.co/zVnKDcMg/593488625-2839982879726927-1264461213536607241-n-jpg-stp-dst-jpg-s480x480-tt6-nc-cat-100-ccb-1-7-n.jpg",
  "https://i.ibb.co/rGKb2K3B/481274041-1273226473742707-799841461924040609-n-jpg-stp-dst-jpg-s480x480-tt6-nc-cat-107-ccb-1-7-nc.jpg",
  "https://i.ibb.co/B23MQbWW/755170698-1604694854352075-5982576852668219101-n-jpg-stp-dst-jpg-s480x480-tt6-nc-cat-100-ccb-1-7-n.jpg"
];

async function getSaePingData(host = '8.8.8.8') {
  const start = Date.now();
  const res = await ping.promise.probe(host, { timeout: 2 });
  const latency = res.alive ? res.time : (Date.now() - start);
  const status = res.alive ? '✅ Online' : '❌ Offline';
  
  // Sélection aléatoire d'une image
  const randomImage = SAE_IMAGES[Math.floor(Math.random() * SAE_IMAGES.length)];

  const caption = `
╭━━━━━━〔 ⚽ 𝐒𝐀𝐄 𝐈𝐓𝐎𝐒𝐇𝐈 〕━━━━━━╮
┃
┃ ⚡ 𝐏𝐈𝐍𝐆 𝐒𝐘𝐒𝐓𝐄𝐌
┃
┣━━━━━━━━━━━━━━
┃
┃ 🏷️ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${status}
┃ ⚡ 𝐋𝐚𝐭𝐞𝐧𝐜𝐞 : ${latency}ms
┃ 🤖 𝐁𝐨𝐭 : Actif
┃
┣━━━━━━━━━━━━━━
┃
┃ ⚽ 𝐒𝐀𝐄 𝐈𝐓𝐎𝐒𝐇𝐈 𝐒𝐘𝐒𝐓𝐄𝐌
┃ 🖇️ 𝐂𝐑𝐈𝐌𝐒𝐎𝐍 🩵🪽
┃
╰━━━━━━━━━━━━━━╯
`.trim();

  return { caption, image: randomImage };
}

// Exemple d'utilisation dans ton bot :
// api.sendMessage({ body: result.caption, attachment: await getStream(result.image) }, threadID);
