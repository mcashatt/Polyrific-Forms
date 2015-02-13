# Polyrific-Forms
Polyrific Forms is a collection of AngularJS directives for quickly creating HTML form elements.  It's rough, and probably could be coded much more elegantly, but it gets the job done and saves a ton of time in creating HTML forms.  Of course, improvements are welcome and encouraged.

## What it does
Polyrific takes a simple bit of HTML markup like this:
```
<div class='row'>
    <div pr-form-input type='text' name='Name' model='Page.Item.Name' placeholder='Your name' label='Your Name:'                    isrequired='true' no-asterisk></div>
</div>
```
And it creates an expanded bit of HTML at runtime like this:
```
<div class="row">
  <div pr-form-input="" type="text" name="Title" model="Page.Item.Name" placeholder="Your name" label="Your Name:"        isrequired="false" no-asterisk="">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <label for="Name">Your Name:</label>
      <input autocomplete="off" type="text" class="form-control ng-pristine ng-valid" id="Name" ng-model="Page.Item.Name"        placeholder="Your name" name="Name">
    </div>
  </div>
</div>
```

##Dependencies
- AngularJS (https://angularjs.org/)
- Bootstrap (http://getbootstrap.com/)
- Bootstrap UI for Angular (http://angular-ui.github.io/bootstrap/)

##What's in the box
- Input element
- Textarea element
- Select element
- Checkbox / Radio button element
- Date picker element
- Datetime picker element
- Button element

##Options
There are several additional attributes that can be added to your master div element (where you have placed the directive):
- **span**: If left out, your rendered column element will have a default of 12 (col-lg-12 col-md-12 col-sm-12 col-xs-12).  If you specify a single integer (e.g. span="5") then all form factors will use that number (col-lg-5 col-md-5 col-sm-5 col-xs-5).  Alternatively, you can specify a hyphen delimited list to give all form factors different assignments.  For example span="12-6-5-3" renders as col-lg-12 col-md-6 col-sm-5 col-xs-3.
- **no-asterisk**: This attribute prevents an asterisk from being appended to the label of required fields.
- **type**: the type of control.  For example, you can use "number" on a text input so that only numers are allowed.
- **placeholder**: The placeholder text to use.
- **label**: The text to use as a label.
- **min**: A minimum integer value (for number input)
- **max**: A maximum integer value (for number input)
- **extra-attribute**: Any arbitary additional attribute, such as angular directives, that should be assigned to the element.  This can be a single attribute or a list of extra attributes.
- **help**: This attribute adds a little "(?)" next to the label that has a tooltip assigned so that when the user hovers over it they can see what the control is for.  You assign the help text as the value of this attribute (e.g. help="This control is where you enter your first name").
- **pattern**: This attribute renders as "ng-pattern" and is where you assign any validation regex patterns needed for the field such as email, credit card, etc.
- - **focus**: This attribute renders as "ng-focus" on the control and you would insert a function to call on the control's focus event (e.g. focus="DoStuff()").
- **blur**: This attribute renders as "ng-blur" on the control and you would insert a function to call on the blur event (e.g. blur="DoStuff()").
- **isRequired**: If the element is not a required field, set this to false.  If it is required, set the value as "true" plus a pipe plus the form name (e.g. isRequired="true|frmSomeFormName").
- **requiredCondition**: Under what conditions should the field be required (e.g requiredCondition="!Page.Item.SomeValue").
- **model**: This is the Angular model that should be assigned to the control (e.g. model="Page.Item.SomeModel").
