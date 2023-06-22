---
id: T9c8SkeW4
type: form
title: Contact Form
settings:
  resolver: Form
  success_msg: Thank you for reaching out!
  event_id: XJHYJIYC
rows:
  - fields:
      - type: input
        input_type: text
        required: true
        label: Full name
        autocomplete: name
        name: full_name
      - type: input
        input_type: text
        required: false
        label: Company Name
        name: companyname
        autocomplete: organization
    position: bottom
  - fields:
      - type: input
        input_type: email
        required: true
        label: Email Address
        name: email
        autocomplete: email
      - type: input
        input_type: tel
        required: false
        label: Phone Number
        name: phone
        autocomplete: tel
      - type: input
        input_type: hidden
        label: hidden field
        name: hiddenitem
        required: false
        autocomplete: off
    position: bottom
  - fields:
      - type: textarea
        required: true
        label: What’s the main issue we’ll focus on?
        name: issue
    position: bottom
  - fields:
      - type: checkbox
        required: true
        label: I agree to the terms and conditions
        name: terms
    position: bottom
---
