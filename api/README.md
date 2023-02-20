# API

### Chat GPT3 Prompts

#### Inputs
[topic] = String!
[audience] = "5 year old" | "10 year old" | "non-technical adult"

#### Outputs
[short_description] = In language that a [audience] could understand, what is [topic] in 50 words or less?
[long_description] = In language that a [audience] could understand, what is [topic] in about 200 words?
[parent] = In three words or less, what field does [topic] belong to?
[grandparent] = In three words or less, what field does [parent] belong to?
[related] = Give me a bullet-point list of popular topics similar to [topic]. Each one should be no more than a word or two
[related.description] = Using language a [audience] could understand, what is the relationship between [topic] and [related] in 15 words or less?