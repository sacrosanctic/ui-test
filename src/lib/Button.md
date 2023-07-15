<script>
	import Button from './Button.svelte';
	import { Story } from 'kitbook';
</script>

<!-- prettier-ignore -->
title

```
<Button>i am best {name}</Button>
```

<Story
	name="Story Title"
	knobs={{
		name: 'Jack'
	}}
	let:props
>
	<Button>i am best {props.name}</Button>
</Story>
