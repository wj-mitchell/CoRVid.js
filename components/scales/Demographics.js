var demographics = {
      type: jsPsychSurvey,
      pages: [
        [
          {
            type: 'text',
            prompt: 'Age (in years)',
            name: 'Age',
          },
          {
            type: 'multi-choice',
            options: ['Male', 'Female', 'Non-binary / Third gender', ' Prefer not to say'],
            option_reorder: 'random',
            prompt: 'What gender do you identify as?',
            name: 'Gender_Identity',
            required: true,
          },
          {
            type: 'multi-choice',
            options: ['Male', 'Female', 'Intersex', ' Prefer not to say'],
            option_reorder: 'random',
            prompt: 'What sex were you assigned at birth?',
            name: 'Sex',
            required: true,
          },
          {
            type: 'multi-select',
            options: ['Asian', 'Black or African American', 'Hispanic or Latino', 'Native American', 'White or Caucasian', 'Not listed', 'Prefer not to say'],
            option_reorder: 'none',
            prompt: 'What is your race or ethnicity? (Select all that apply)',
            name: 'Race',
            required: true,
          },
          {
          type: 'multi-select',
            options: ['Single', 'Married', 'Divorced', 'Widowed', 'Prefer not to say'],
            option_reorder: 'none',
            prompt: 'What is your marial status?',
            name: 'Marital_Status',
            required: true,
          },
          {
          type: 'text',
            prompt: 'How many years of formal education have you completed? (including kindergarten)',
            name: 'Edu_Num',
          },
          {
          type: 'multi-choice',
            options: ['Some high school', 'High school degree or GED', 'Some college', 'Vocational / technical / trade training', 'Undergradaute degree (BA, BS, etc.)', 'Some graduate school', 'Graduate degree (MA, MS, PhD, etc.)', 'Prefer not to say'],
            option_reorder: 'none',
            prompt: 'What is the highest level of education you have completed?',
            name: 'Edu_Cat',
            required: true,
          },
          {
            type: 'multi-choice',
              options: ['Under $15,000', '$15,001 - $25,000', '$25,001 - $35,000', '$35,001 - $50,000', '$50,001 - $75,000', '$75,001 - $100,000', ' $100,001 - $150,000', 'Over $150,000', 'Prefer not to say'],
              option_reorder: 'none',
              prompt: 'What is your total annual household income?',
              name: 'Income',
              required: true,
          },
        ]
      ],
      button_label_finish: 'Continue',
      preamble: 'Please carefully read and respond to the following questions:',
      autocomplete: true, 
      data: {task: 'Demographics'},
    };