// Formatting our labels and instructions
var style_instr = '<p style="font-size: 36px; width: 1200px; line-height: 40px;">'
var style_buttons = '<p style="font-size: 36px; line-height: 40px;">'

// Consent labels
var labels_Consent = [style_buttons + 'I consent to<br>participate in this study</p>', 
    style_buttons + 'I do not consent to<br>participate in this study</p>']

// Error messages
var error_Laptop = [
    style_instr + 'You must use a desktop/laptop computer to participate in this experiment.</p>'
]
var error_Browser = [
    style_instr + 'You must use Chrome, Firefox, or Safari as your browser to complete this experiment.</p>'
]

// Miscellaneous text
var instr_Consent = [
    style_instr + "<br><br>Before completing any study tasks, please review the following consent document and indicate whether you consent to study participation.<br><br></p>"
]
var instr_NoConsent = [
    style_instr + 'You did not consent to participate. The session will now finish. Thank you for your time!<br><br><br><a href="https://app.prolific.co/">Click here to return to Prolific and complete the study</a>.</p>'
]
var instr_Intro =[
    style_instr + 'Thank you for agreeing to participate in this experiment! <br><br><br><br> Please press the <strong>SPACE BAR</strong> to continue</p>', 
    style_instr + 'Before we begin, please be sure that you are in a good space to complete the experiment. This space should be: <br><br><br><br> <strong>Comfortable <br><br> Distraction-free <br><br> Available for the next 20 minutes</strong> <br><br><br><br><br> Please press the <strong>SPACE BAR</strong> to continue</p>', 
    style_instr + '<strong>Please give your full attention to the experiment. This includes:</strong> <br><br><br><br> Closing or minimizing other programs on your computer <br><br> Silencing your phone or placing it somewhere it will not be distracting <br><br> Testing that your audio is working and set to a comfortable volume that you can clearly hear <br><br> Not completing this experiment with others present <br><br><br><br><br> Please press the <strong>SPACE BAR</strong> to continue</p>', 
    style_instr + 'During this experiment, you will watch a short video clip. Please continuous rate your assessment of this clip regarding X Y or Z. <br><br><br> <strong> Please watch and react to these clips as you naturally would</strong>. <br><br><br><br> Please press the <strong>SPACE BAR</strong> to continue</p>',
]
var instr_IndDiff = [
    style_instr +'You have just completed our video task! Thank you for your continued effort and attention. <br><br> In our final task, we will ask you questions about yourself. Please read the instructions before each series of questions and answer the questions honestly to the best of your abiltities.<br><br><br><br> Please press the <strong>SPACE BAR</strong> to continue</p>'
]
var instr_ExpEnd = [
    style_instr + 'Thank you for completing the study! <br><br><br><br> Please press the <strong>SPACE BAR</strong> to automatically reroute back to Prolific to complete your study partcipation.</p>'
]