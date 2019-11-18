<script>

</script>
<style>

</style>

<svelte:head>
	<title>Contact KBI Plumbing</title>
	<meta name="description" content="Contact KBI Plumbing Supply For Your Plumbing Parts & Tools">
</svelte:head>

<form action="" method="post">
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
