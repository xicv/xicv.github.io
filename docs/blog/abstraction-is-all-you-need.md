---
title: Abstraction Is All You Need
description: A thought about large language models, human intent and the next layer of software development.
date: '2026-08-12'
---

# Abstraction Is All You Need

The title is a nod to [*Attention Is All You Need*](https://proceedings.neurips.cc/paper/7181-attention-is-all-you-need), the 2017 paper that introduced the Transformer.

Lately, I have been thinking about large language models in a slightly different way.

They feel less like another tool for writing code and more like a new abstraction layer between an idea in my head and working software.

This is not a prediction or a rule. It is just a thought that has been helping me make sense of how software development is changing.

## The layers I already use

When I write software, I rarely think about what the computer is doing at its lowest level.

- The programming language lets me express logic without writing machine instructions.
- The compiler handles the translation.
- Libraries and frameworks give me solutions I do not need to build again.
- The IDE helps me navigate, change and debug the system.

All these layers create distance between me and the machine.

The lower levels are still there. I can move down when I need to, but I do not have to live there every day.

LLMs feel like another step in that direction.

## What feels different

With an LLM, I can start with a thought that is still a little rough.

I can give it:

- an idea
- a codebase
- a screenshot
- an error message
- a few examples
- some rules and tests

The model can turn that context into a possible implementation. It can explore files, suggest a design, make changes, run tests and react to what fails.

That feels different from normal autocomplete.

The starting point is no longer only code. It can also be intent.

I sometimes think of it like this: the new layer is not just code sitting above the machine. It is thought sitting above the code.

## Externalising part of my thinking

I came across Peter Naur's idea of [programming as theory building](https://pages.cs.wisc.edu/~remzi/Naur.pdf). He wrote about programming as more than producing source code. A programmer carries a mental model of the problem, the system and why it works the way it does.

That idea feels especially relevant now.

I do not think an LLM contains my mind or stores who I am. It has broad patterns learned during training. The local understanding still has to come from me and the project.

It appears in things like:

- the code I show it
- the constraints I explain
- the examples I choose
- the corrections I make
- the tests I use to define success

When I make those things clear, part of the mental model in my head becomes something the LLM can work with.

The phrase I keep coming back to is:

**Source code remains the executable truth. Intent becomes executable context.**

## Not a compiler for English

Calling an LLM an abstraction does not mean I think it is a compiler for natural language.

A compiler follows a formal language with defined rules. An LLM works with probability, missing context and language that can mean different things.

Sometimes it creates exactly what I wanted. Sometimes it produces something polished and completely wrong.

So my current loop looks something like this:

**intent + context + model + tools + verification → software**

Verification is the part I cannot leave out.

I still need tests, types, static analysis, review and a clear idea of what correct behaviour looks like. The model can help do some of the work, but I still need a way to tell whether the work is true.

## A shift I can feel

I have started to notice my attention moving:

- from remembering syntax to explaining intent
- from typing every line to reviewing complete changes
- from isolated implementation details to boundaries and behaviour
- from telling the computer every step to giving a model enough context to find the steps

This does not make traditional programming unimportant. When the abstraction leaks—and it does—I still need to understand the layers underneath it.

But it changes where I spend most of my time.

## I do not see it as good or bad

I do not have a neat verdict on whether this change is good or bad.

The steam engine did not make horses disappear. It changed the normal way people moved heavy things over long distances.

High-level languages did not remove assembly. They changed where most software was written.

I think LLMs may do something similar. Traditional programming will remain, but the usual starting point may move.

Once a new abstraction gives us enough leverage, we do not often return to the lower layer for everyday work.

## Where my thinking is now

I used to think of programming mainly as writing instructions for a machine.

Now I also think about creating the context in which a model can write and revise those instructions with me.

That is why the word *abstraction* feels useful.

It is not literally all we need. Judgment, knowledge, discipline and responsibility still matter. I still need to choose the problem, decide what good looks like, check the result and own what I ship.

But one new abstraction can change how everything around it works.

Our thoughts are becoming part of the programmable layer.

That is where my thinking is today. I expect it will keep changing as the tools—and the way we use them—continue to change.

## A few things behind this thought

- [*Attention Is All You Need*](https://proceedings.neurips.cc/paper/7181-attention-is-all-you-need)
- [*Programming as Theory Building*](https://pages.cs.wisc.edu/~remzi/Naur.pdf)
- [*Evaluating Large Language Models Trained on Code*](https://arxiv.org/abs/2107.03374)
- [*SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering*](https://papers.nips.cc/paper_files/paper/2024/hash/5a7c947568c1b1328ccc5230172e1e7c-Abstract-Conference.html)
