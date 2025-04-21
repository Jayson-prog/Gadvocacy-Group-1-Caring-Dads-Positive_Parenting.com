
  function prevTestimonial() {
      alert("Previous testimonial");
    }
    function nextTestimonial() {
      alert("Next testimonial");
    }
  const playerMap = {
    player1: 'XjZuAgYy8OU',
    player2: 'DsYToQBSxK0',
    player3: 's3Z_NN1zctw',
    player4: 'WQ8U1ytQYTM',
    player5: 'FFLGXyxOvw0',
    player6: '9tTSPxCiWA4',
    player7: 'zrEN97JwWAo',
    player8: '71NFP643lr0',
    player9: '_FOgB12LYyM'
  };

  const players = {};

  function onYouTubeIframeAPIReady() {
    Object.keys(playerMap).forEach(id => {
      players[id] = new YT.Player(id, {
        videoId: playerMap[id],
        playerVars: {
          modestbranding: 1,
          rel: 0
        },
        events: {
          'onStateChange': (event) => {
            if (event.data === YT.PlayerState.PLAYING) {
              const overlay = document.querySelector(`[data-playerid="${event.target.a.id}"]`);
              if (overlay) {
                overlay.classList.add("d-none");
              }
            }
          }
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.video-overlay').forEach(overlay => {
      const playerId = overlay.getAttribute('data-playerid');
      const button = overlay.querySelector('.play-btn');
      button.addEventListener('click', () => {
        if (players[playerId]) {
          players[playerId].playVideo();
        }
      });
    });
  });
