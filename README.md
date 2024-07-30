# video-rating-continuous
Current version: 0.0.1. 
<!-- [See version history](https://github.com/jspsych/jsPsych/blob/main/packages/plugin-video-rating-continuous/CHANGELOG.md). -->

This plugin plays a video and collects continuous ratings from the subject on a specific metric. Rating changes can be made using keys which can be changed and which will update the values of a scale visualized below the stimulus. The current value of the scale appears below it and is dynamically updated as ratings changed. The labels, steps, units, and minimum and maximum values of the scale can be manually specified. The trial can start and stop at specified times or for the duration of the stimulus. The default sample rate of the scale is 24hz, or 24 times per second, but this can be manually specified as well.

Video files can be automatically preloaded by jsPsych using the [`preload` plugin](preload.md). However, if you are using timeline variables or another dynamic method to specify the video stimulus, you will need to [manually preload](../overview/media-preloading.md#manual-preloading) the videos. Also note that video preloading is disabled when the experiment is running as a file (i.e. opened directly in the browser, rather than through a server), in order to prevent CORS errors - see the section on [Running Experiments](../overview/running-experiments.md) for more information.


## Parameters

In addition to the [parameters available in all plugins](../overview/plugins.md#parameters-available-in-all-plugins), this plugin accepts the following parameters. Parameters with a default value of *undefined* must be specified. Other parameters can be left unspecified if the default value is acceptable.

Parameter | Type | Default Value | Description
----------|------|---------------|------------
stimulus | array | *undefined* | An array of file paths to the video. You can specify multiple formats of the same video (e.g., .mp4, .ogg, .webm) to maximize the [cross-browser compatibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats). Usually .mp4 is a safe cross-browser option. The plugin does not reliably support .mov files. The player will use the first source file in the array that is compatible with the browser, so specify the files in order of preference.
prompt | string | null | This string can contain HTML markup. Any content here will be displayed below the stimulus. The intention is that it can be used to provide a reminder about the action the participant is supposed to take (e.g., which key to press).
width | numeric | width of the video file | The width of the video display in pixels.
height | numeric | height of the video file | The height of the video display in pixels.
autoplay | boolean | true | If true, the video will begin playing as soon as it has loaded.
controls | boolean | false | If true, controls for the video player will be available to the participant. They will be able to pause the video or move the playback to any point in the video.
start | numeric | null | If given a value, the video will start at this time point in seconds.
stop| numeric | null | If given a value, the video will stop at this time point in seconds.
rate | numeric | null | The playback rate of the video. 1 is normal, <1 is slower, >1 is faster.
sample_rate | numeric | 24 | The rate at which the slider value is sampled in hertz, or samples per second.
min | integer | -100 | Sets the minimum value of the slider.
max | integer | 100 | Sets the maximum value of the slider.
abs_value | bool | true | If true, then the current value of the scale appears as the absolute value of its current value. If false, the true value is visualized. Regardless of `abs_value` setting, `data.response` will show true value of the scale at any given time point.
left_key | key | '1' | Key used to move the slider to the left.
right_key | key | '2' | Key used to move the slider to the right.
units | string | '' | Appends a descriptor to the end of the current value of the scale for visualization purposes (e.g., '%', 'units').
slider_start | integer | 0 | Sets the starting value of the slider
step | integer | 1 | Sets the step of the slider. This is the smallest amount by which the slider can change.
labels | array of strings | [] | Labels displayed at equidistant locations on the slider. For example, two labels will be placed at the ends of the slider. Three labels would place two at the ends and one in the middle. Four will place two at the ends, and the other two will be at 33% and 67% of the slider width.
slider_width | integer | null | Set the width of the slider in pixels. If left null, then the width will be equal to the widest element in the display.

## Data Generated

In addition to the [default data collected by all plugins](../overview/plugins.md#data-collected-by-all-plugins), this plugin collects the following data for each trial.

Name | Type | Value
-----|------|------
response | array | An array of the slider values sampled during playback.
rt | array | An array of the times at which the slider values were sampled during playback (in seconds).
stimulus | array | The `stimulus` array. This will be encoded as a JSON string when data is saved using the `.json()` or `.csv()` functions. 
slider_start | numeric | The starting value of the slider. 
start | numeric | The start time of the video clip.

## Install

This plugin is currently only available through this repository, though it is in development to be submitted to [jsPsych](https://github.com/jspsych/jsPsych/tree/main) or [jsPsych-contrib](https://github.com/jspsych/jsPsych-contrib/tree/main).

<!-- 
Using the CDN-hosted JavaScript file:

```js
<script src="https://unpkg.com/@jspsych/plugin-video-rating-continuous@0.0.1"></script>
```

Using the JavaScript file downloaded from a GitHub release dist archive:

```js
<script src="jspsych/plugin-video-rating-continuous.js"></script>
```

Using NPM:

```
npm install @jspsych/plugin-video-slider-response
```
```js
import videoSliderResponse from '@jspsych/plugin-video-rating-continuous';
``` -->

## Example
<!-- 
???+ example "Continuously rate enjoyment of a video clip"
    === "Code"
    
        ```javascript
        var trial = {
          type: jsPsychVideoRatingContinuous,
          stimulus: [
            'video/fish.mp4'
          ],
          labels: ['Very Bad', 'Neutral', 'Very Good'],
          prompt: '<p>Please rate your enjoyment of the video clip from moment to moment.</p>'
        };
        ```

        *[Stock Footage](https://www.pond5.com/stock-footage/item/721819-school-yellowtail-snappers) provided by rjt98, from [Pond5](https://www.pond5.com/)*
    
    === "Demo"
        <div style="text-align:center;">
          <iframe src="../../demos/jspsych-video-rating-continuous-demo1.html" width="90%;" height="600px;" frameBorder="0"></iframe>
        </div>

    <a target="_blank" rel="noopener noreferrer" href="../../demos/jspsych-video-rating-continuous-demo1.html">Open demo in new tab</a> -->
