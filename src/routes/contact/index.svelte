<script>
	let display = false;
	let formError = false;
	let formMessage = '';
let formSubmit = function (e) {
	let form = this;
	// Stop the regular form submission
	e.preventDefault();
	// Collect the form data while iterating over the inputs
	var data = {};
	var params = "";
	var cnt = 0;
	for (var i = 0, ii = form.length; i < ii; ++i) {
		var input = form[i];
		data[input.name] = input.name;
		if(cnt == 0){
			params += data[input.name]+'='+input.value;
			cnt++;
		}else if(i < form.length){
			params += '&'+data[input.name]+'='+input.value;
			cnt++;
		}
	}
	// // Construct an HTTP request
	var xhr = new XMLHttpRequest();
	xhr.open('post', '/contact-actions/index.php', true);
	// xhr.setRequestHeader('Accept', 'application/text;');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
	// Send the collected data as JSON
	xhr.send(params);
	// Callback function
	xhr.onloadend = function (response) {
		display = true;
		if (response.target.status === 0) {
			// Failed XmlHttpRequest should be considered an undefined error.
			formError= true;
			formMessage = "Something Went Wrong";
		} else if (response.target.status === 400) {
			// Bad Request
			formError = true;
			formMessage = 'There was a bad request';
		}
		else if (response.target.status === 404) {
		// Bad Request
			formError = true;
			formMessage = 'There was a bad request';
		} else if (response.target.status === 200) {
			// Success
			formMessage = "Your Message Has Been Successfully Sent"
		}
		console.log(response);
	};
};
</script>
<style>
.message-box{
	padding:.5rem 2rem;
}
</style>

<svelte:head>
	<title>Contact KBI Plumbing</title>
	<meta name="description" content="Contact KBI Plumbing Sewer & Drain And Get A Free Estimate For Any Of Your Plumbing needs">
</svelte:head>
{#if display === false}
<form action="" method="post" on:submit|preventDefault={formSubmit}>
	<div class="form-group">
		<h2>Your information</h2>
		<label for="name">Name
			<input class="form-control" id="name" type="text" name="name" />
		</label>
		<label for="email">Email
			<input class="form-control" id="email" type="email" name="email" />
		</label>
	</div>
	<div class="form-group">
		<h2>Service information</h2>
		<label for="subject">Subject
			<input class="form-control" id="subject" type="text" name="subject" />
		</label>
	</div>
	<div class="form-group">
		<label for="message">Message
			<textarea class="form-control" name="message" id="message" cols="30" rows="10"></textarea>
		</label>
	</div>
	<p class="form-status" style="display:none;">Your Message Has Been Successfully Sent</p>
	<button class="btn btn-lg btn-primary">Submit Form</button>
</form>
{/if}
{#if display === true}
	{#if formError === true}
		<div id="message-box" class="alert-danger message-box">{formMessage}</div>
	{/if}
	{#if formError === false}
		<div id="message-box" class="alert-success message-box">{formMessage}</div>
	{/if}
{/if}
