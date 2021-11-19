module.exports = (Discord, client, config) => {
  client.on('ready', () => {
      console.log('(!) ' + client.user.tag + ' olarak oturum açıldı!');
      client.user.setStatus('idle');
      client.user.setActivity('Levian Code | '+client.guilds.cache.size+' servers!', {
          type: 'LISTENING'
      }).then(() => {
          console.log('(!) Presence başarıyla ayarlandı!');
      });
  });
};