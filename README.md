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

##What's in the box
- Input element
- Textarea element
- Select element
- Checkbox / Radio button element
- Date picker element
- Datetime picker element
- Button element

##Bootstrap / Bootstrap UI
The rendered HTML includes Bootstrap classes, and the depend on Bootstrap UI for Angular.
