var jsPsychVideoRatingContinuous = (function (jsPsych) {
  'use strict';

  var _package = {
    name: "@jspsych/plugin-video-rating-continuous",
    version: "0.0.1",
    description: "jsPsych plugin for playing a video file and getting a continuous online ratings",
    type: "module",
    main: "dist/index.cjs",
    exports: {
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    typings: "dist/index.d.ts",
    unpkg: "dist/index.browser.min.js",
    files: [
      "src",
      "dist"
    ],
    source: "src/index.ts",
    scripts: {
      test: "jest --passWithNoTests",
      "test:watch": "npm test -- --watch",
      tsc: "tsc",
      build: "rollup --config",
      "build:watch": "npm run build -- --watch"
    },
    repository: {
      type: "git",
      url: "git+https://github.com/jspsych/jsPsych.git",
      directory: "packages/plugin-video-rating-continuous"
    },
    author: "Modified by William Mitchell",
    license: "MIT",
    bugs: {
      url: "https://github.com/jspsych/jsPsych/issues"
    },
    homepage: "https://www.jspsych.org/latest/plugins/video-rating-continuous",
    peerDependencies: {
      jspsych: ">=7.1.0"
    },
    devDependencies: {
      "@jspsych/config": "^3.0.0",
      "@jspsych/test-utils": "^1.2.0"
    }
  };

  const info = {
    name: "video-rating-continuous",
    version: "0.1.0",
    parameters: {
      stimulus: {
        type: jsPsych.ParameterType.VIDEO,
        array: true,
        default: undefined
      },
      prompt: {
        type: jsPsych.ParameterType.HTML_STRING,
        default: null
      },
      width: {
        type: jsPsych.ParameterType.INT,
        default: ""
      },
      height: {
        type: jsPsych.ParameterType.INT,
        default: ""
      },
      autoplay: {
        type: jsPsych.ParameterType.BOOL,
        default: true
      },
      controls: {
        type: jsPsych.ParameterType.BOOL,
        default: false
      },
      start: {
        type: jsPsych.ParameterType.FLOAT,
        default: null
      },
      stop: {
        type: jsPsych.ParameterType.FLOAT,
        default: null
      },
      rate: {
        type: jsPsych.ParameterType.FLOAT,
        default: 1
      },
      sample_rate:{
        type: jsPsych.ParameterType.INT,
        default: 24
      },
      min: {
        type: jsPsych.ParameterType.INT,
        default: -100
      },
      max: {
        type: jsPsych.ParameterType.INT,
        default: 100
      },
      left_key: {
        type: jsPsych.ParameterType.KEY,
        default: '1'
      },
      right_key: {
        type: jsPsych.ParameterType.KEY,
        default: '2'
      },
      units: {
        type: jsPsych.ParameterType.STRING,
        default: ''
      },
      abs_value: {
        type: jsPsych.ParameterType.BOOL,
        default: true,
      },
      slider_start: {
        type: jsPsych.ParameterType.INT,
        default: 0
      },
      step: {
        type: jsPsych.ParameterType.INT,
        default: 1
      },
      labels: {
        type: jsPsych.ParameterType.HTML_STRING,
        array: true,
        default: []
      },
      slider_width: {
        type: jsPsych.ParameterType.INT,
        default: null
      },
    },
    data: {
      response: {
        type: jsPsych.ParameterType.INT
      },
      rt: {
        type: jsPsych.ParameterType.FLOAT
      },
      stimulus: {
        type: jsPsych.ParameterType.STRING,
        array: true
      },
      slider_start: {
        type: jsPsych.ParameterType.INT
      },
      start: {
        type: jsPsych.ParameterType.FLOAT
      }
    }
  };

  class VideoRatingContinuousPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    static info = info;
    trial(display_element, trial) {
      if (!Array.isArray(trial.stimulus)) {
        throw new Error(`
        The stimulus property for the video-rating-continuous plugin must be an array
        of files. See https://www.jspsych.org/latest/plugins/video-rating-continuous/#parameters
      `);
      }
      var half_thumb_width = 7.5;
      var video_html = '<video id="jspsych-video-rating-continuous-stimulus-video" style="width: 100%; height: auto;"';
      if (trial.width) {
        video_html += ' width="' + trial.width + '"';
      }
      if (trial.height) {
        video_html += ' height="' + trial.height + '"';
      }
      if (trial.autoplay && trial.start == null) {
        video_html += " autoplay ";
      }
      if (trial.controls) {
        video_html += " controls ";
      }
      if (trial.start !== null) {
        video_html += ' style="visibility: hidden;"';
      }
      video_html += ">";

      var video_preload_blob = this.jsPsych.pluginAPI.getVideoBuffer(trial.stimulus[0]);
      if (!video_preload_blob) {
        for (var i = 0; i < trial.stimulus.length; i++) {
          var file_name = trial.stimulus[i];
          if (file_name.indexOf("?") > -1) {
            file_name = file_name.substring(0, file_name.indexOf("?"));
          }
          var type = file_name.substr(file_name.lastIndexOf(".") + 1);
          type = type.toLowerCase();
          if (type == "mov") {
            console.warn(
              "Warning: video-rating-continuous plugin does not reliably support .mov files."
            );
          }
          video_html += '<source src="' + file_name + '" type="video/' + type + '">';
        }
      }
      video_html += "</video>";

      var html = '<div id="jspsych-video-rating-continuous-wrapper" style="margin: 100px 0px;">';
      html += '<div id="jspsych-video-rating-continuous-stimulus">' + video_html + "</div>";
      html += '<div class="jspsych-video-rating-continuous-container" style="position:relative; margin: 0 auto 3em auto; width:';
      if (trial.slider_width !== null) {
        html += trial.slider_width + "px;";
      } else {
        html += "auto;";
      }
      html += '">';
      html += '<input type="range" class="jspsych-slider" value="' + trial.slider_start + '" min="' + trial.min + '" max="' + trial.max + '" step="' + trial.step + '" id="jspsych-video-rating-continuous-response" style="width:';
      html += '"></input>';
      html += '<div id="jspsych-video-rating-continuous-value" style="text-align: center; font-size: 150%; margin-top: 10px;">';
      if (abs_value) {
        html += Math.abs(trial.slider_start) + trial.units + '</div><div>';
      } else {
        html += trial.slider_start + trial.units + '</div><div>';
      }
      for (var j = 0; j < trial.labels.length; j++) {
        var label_width_perc = 100 / (trial.labels.length - 1);
        var percent_of_range = j * (100 / (trial.labels.length - 1));
        var percent_dist_from_center = (percent_of_range - 50) / 50 * 100;
        var offset = percent_dist_from_center * half_thumb_width / 100;
        html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; left:calc(' + percent_of_range + "% - (" + label_width_perc + "% / 2) - " + offset + "px); text-align: center; width: " + label_width_perc + '%;">';
        html += '<span style="text-align: center; font-size: 80%;">' + trial.labels[j] + "</span>";
        html += "</div>";
      }
      html += "</div>";
      html += "</div>";
      html += "</div>";

      if (trial.prompt !== null) {
        html += "<div>" + trial.prompt + "</div>";
      }

      display_element.innerHTML = html;

      var video_element = display_element.querySelector(
        "#jspsych-video-rating-continuous-stimulus-video"
      );

      if (video_preload_blob) {
        video_element.src = video_preload_blob;
      }
      video_element.onended = () => {
        end_trial();
      };
      video_element.playbackRate = trial.rate;
      if (trial.start !== null) {
        video_element.pause();
        video_element.onseeked = () => {
          video_element.style.visibility = "visible";
          video_element.muted = false;
          video_element.onseeked = null;
        };
        video_element.onplaying = () => {
          video_element.currentTime = trial.start;
          video_element.onplaying = null;
        };
        video_element.muted = true;
      }
      
      if (trial.trial_duration !== null && trial.trial_duration !== undefined) {
        this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
      };

      var slider_element = display_element.querySelector(
        "#jspsych-video-rating-continuous-response"
      );
      var value_element = display_element.querySelector(
        "#jspsych-video-rating-continuous-value"
      );
      slider_element.addEventListener('input', () => {
        if (abs_value) {
          value_element.innerHTML = Math.abs(slider_element.value) + trial.units;
        } else { 
          value_element.innerHTML = slider_element.value + trial.units;
        }
      }
    );

      document.addEventListener("keydown", (event) => {
        if (event.key === trial.right_key) {
          slider_element.value = Math.min(trial.max, parseInt(slider_element.value) + trial.step);
          if (abs_value) {
            value_element.innerHTML = Math.abs(slider_element.value) + trial.units;
          } else { 
            value_element.innerHTML = slider_element.value + trial.units;
          }
        } else if (event.key === trial.left_key) {
          slider_element.value = Math.max(trial.min, parseInt(slider_element.value) - trial.step);
          if (abs_value) {
            value_element.innerHTML = Math.abs(slider_element.value) + trial.units;
          } else { 
            value_element.innerHTML = slider_element.value + trial.units;
          }
        }
      });

      var startTime = performance.now();
      var response = []; 

      var rt = [];

      function sample_value() {
        rt.push(parseFloat(((performance.now() - startTime)/1000).toFixed(3))); 
        response.push(slider_element.value);
      }

      var sampling_interval = setInterval(sample_value, 1000 / trial.sample_rate);

      const end_trial = () => {
        clearInterval(sampling_interval);
        video_element.pause();
        video_element.onended = null; 
        
        var trial_data = {
          stimulus: trial.stimulus,
          start: trial.start,
          slider_start: trial.slider_start,
          rt: rt, 
          response: response, 
          sample_rate: trial.sample_rate,
        };

        this.jsPsych.finishTrial(trial_data);
      };
    }
  }

  VideoRatingContinuousPlugin.info = info;

  return VideoRatingContinuousPlugin;

})(jsPsychModule);
