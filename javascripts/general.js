$(document).on("ready", function() {
	particlesJS("particles-js", {
	  "particles": {
	    "number": {
	      "value": 100,
	      "density": {
	        "enable": true,
	        "value_area": 1000
	      }
	    },
	    "color": {
	      "value": "#ff4444"
	    },
	    "shape": {
	      "type": "circle",
	      "stroke": {
	        "width": 0,
	        "color": "#000000"
	      },
	      "polygon": {
	        "nb_sides": 1
	      }
	    },
	    "opacity": {
	      "value": 0.5,
	      "random": false,
	      "anim": {
	        "enable": false,
	        "speed": 1,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 5,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 40,
	        "size_min": 0.1,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": true,
	      "distance": 100,
	      "color": "#ff4444",
	      "opacity": 0.25,
	      "width": 1
	    },
	    "move": {
	      "enable": true,
	      "speed": .25,
	      "direction": "none",
	      "random": true,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": false,
	        "mode": "grab"
	      },
	      "onclick": {
	        "enable": false,
	        "mode": "push"
	      },
	      "resize": false
	    },
	    "modes": {
	      "grab": {
	        "distance": 140,
	        "line_linked": {
	          "opacity": 1
	        }
	      },
	      "bubble": {
	        "distance": 400,
	        "size": 40,
	        "duration": 2,
	        "opacity": 8,
	        "speed": 3
	      },
	      "repulse": {
	        "distance": 200,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	});

	var count_particles, stats, update;
	stats = new Stats;
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
	update = function() {
	  stats.begin();
	  stats.end();
	  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
	    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
	  }
	  requestAnimationFrame(update);
	};
	requestAnimationFrame(update);
});
