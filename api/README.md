# API

### Chat GPT3 Prompts

#### Inputs

[topic] = String!
[audience] = "5 year old" | "10 year old" | "non-technical adult"

#### Outputs

[short_description] = In language that a [audience] could understand, what is [topic] in 50 words or less?
[long_description] = In language that a [audience] could understand, what is [topic] in about 200 words?
[extra_short_description] = In language that a [audience] could understand, what is [topic] in 15 words or less?
[parent] = In three words or less, what field does [topic] belong to?
[grandparent] = In three words or less, what field does [parent] belong to?
[related] = Give me a bullet-point list of popular topics similar to [topic]. Each one should be no more than a word or two
[related.each.description] = Using language a [audience] could understand, what is the relationship between [topic] and [related] in 15 words or less?

### Generation Process

1. When we generate a topic we create database entries for all of the information above
2. We also generated a list of related topics. These are stored in the topics table but **without** a description or related topics of its own
3. **As a result, our topics table contains some topics with descriptions and some without**
4. When we visit the page of a topic without a description, we need to generate its description on the fly, at this time we also generate its related topics in turn, continuing the cycle

### Slug

For each topic we also need to generate a slug from the name.
https://www.npmjs.com/package/slug
