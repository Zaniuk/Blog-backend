# GET ALL posts
```
fetch("http://localhost/api/posts", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});

```
This will throw something like: 
```
[
	{
		"_id": "62783a5f0d88b1574e5613c1",
		"userId": 9,
		"title": "Una noticia increible",
		"body": "lorem Ipsum is simply dummy text of verdana aliquet et justo so simple as possible",
		"categories": [
			"Science",
			"Technology"
		],
		"date": "2022-05-08T21:47:11.342Z",
		"ceoTags": [
			"Featured",
			"Recommended"
		],
		"__v": 0
	},
    {
        ...
    }...

```

---
# Create a new Post:

```
fetch("http://localhost/api/posts", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "userId": 9,
    "title": "Una noticia increible",
    "body": "lorem Ipsum is simply dummy text of verdana aliquet et justo so simple as possible",
    "categories": [
      "Science",
      "Technology"
    ],
    "ceoTags": [
      "Featured",
      "Recommended"
    ]
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```
This will throw a HTTP code 200 if ok or 400 if some field is not filled

---