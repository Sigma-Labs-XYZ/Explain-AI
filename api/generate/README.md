### This is the format the database requires

```js
const result = {
  topics: [
    { name: "Test 1", slug: "test_1" },
    { name: "Test 2", slug: "test_2" },
  ],
  descriptions: [
    {
      topic_slug: "test_1",
      audience: 5,
      short: "test test",
      extra_short: "test",
      long: "test test test",
    },
  ],
  relationships: [
    {
      from_slug: "test_1",
      to_slug: "test_2",
      description: "test",
      audience: 5,
      priority: 0,
    },
  ],
  hierarchies: [{ parent_slug: "test_1", child_slug: "test_2" }],
};
```
