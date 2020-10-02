# Documentation Style Guide

This style guide provides a set of editorial guidelines for anyone writing developer documentation for Good Here projects. These are guidelines, not rules. Use your best judgment. 

**Note:** medic-docs does not involve release management and acceptance testing. Help us maintain the quality of our documentation by submiting a pull request (PR) with any suggested changes. One of the repository's maintainers will review the PR, request additional changes as needed, and merge the PR when it is ready.

## Table of Contents
- [Language](#language)
- [General guidelines and best practices](#general-guidelines-and-best-practices)
    - [Present tense](#present-tense)
    - [Active voice](#active-voice)
    - [Simple and direct language](#simple-and-direct-language)
    - [Address the reader as "you"](#address-the-reader-as-you)
    - [Latin phrases](#latin-phrases)
- [Practices to avoid](#practices-to-avoid)
    - [Using "we"](#using-we)
    - [Using jargon and idioms](#using-jargon-and-idioms)
    - [Using statements about the future](#using-statements-about-the-future)
    - [Using statements that will soon be out of date](#using-statements-that-will-soon-be-out-of-date)
- [Formatting standards](#formatting-standards)
    - [Angle brackets for placeholders](#angle-brackets-for-placeholders)
    - [Bold for user interface elements](#bold-for-user-interface-elements)
    - [Italics to define or introduce new terms](#italics-to-define-or-introduce-new-terms)
    - [Code style For filenames, directories, and paths](#code-style-for-filenames-directories-and-paths)
    - [British standard for punctuation inside quotes](#international-standard-for-punctuation-inside-quotes)
    - [Inline code formatting](#inline-code-formatting)
    - [Code snippet formatting](#code-snippet-formatting)

## Language

Documentation for Good Here projects is written in American English.

## General guidelines and best practices

This section contains suggested best practices for clear, concise, and consistent content.

### Present tense

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>CouchDB converts this to a properly hashed password when you save.</td><td>CouchDB will convert this to a properly hashed password on save.</td></tr>
</table>

Exception: Use future or past tense if it is required to convey the correct meaning.

### Active voice

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>Stop everything and delete the medic DB to clear your database.</td><td>Clear your db by stopping everything and deleting the medic DB.</td></tr>
  <tr><td>Replicate your local production database into a new medic database to bootstrap your data.</td><td>Bootstrap your data by replicating your local PROD DB into a new medic database.</td></tr>
</table>

Exception: Use passive voice if active voice leads to an awkward construction.

### Simple and direct language

Use simple and direct language. Avoid using unnecessary phrases, such as saying "please."

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>To create a database, ...</td><td>In order to create a database, ...</td></tr>
  <tr><td>See the configuration file.</td><td>Please see the configuration file.</td></tr>
  <tr><td>View the logs.</td><td>With this next command, we'll view the logs.</td></tr>

</table>

### Address the reader as "you"

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>You can create a database by ...</td><td>We'll create a database by ...</td></tr>
    <tr><td>In the preceding output, you can see...</td><td>In the preceding output, we can see ...</td></tr>
</table>

### Latin phrases

Prefer English terms over Latin abbreviations.

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>For example, ...</td><td>e.g., ...</td></tr>
  <tr><td>That is, ...</td><td>i.e., ...</td></tr>
</table>

Exception: Use "etc." for et cetera.

## Practices to avoid

### Using "we"

Using "we" in a sentence can be confusing, because the reader might not know
whether they're part of the "we" you're describing.

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>Version 3.0 includes ...</td><td>In version 3.0, we have added ...</td></tr>
  <tr><td>Medic Mobile provides a new feature to reduce the time to load contacts.</td><td>We made several changes to reduce the time to load contacts.</td></tr>
  <tr><td>This page teaches you how to use medic-gateway.</td><td>In this page, we are going to learn about medic-gateway.</td></tr>
</table>

### Using jargon and idioms

Some readers speak English as a second language. Avoid jargon and idioms to help them understand better.

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>To get started, ...</td><td>To get up and running with no fuss, ...</td></tr>
  <tr><td>Internally, ...</td><td>Under the hood, ...</td></tr>
    <tr><td>Create a new database.</td><td>Turn up a new database.</td></tr>
</table>

### Using statements about the future

Avoid giving hints about the future. If you need to talk about
an alpha or beta feature, put the text under a heading that identifies it as alpha or beta
information.

### Using statements that will soon be out of date

Avoid words like "currently" and "new." A feature that is new today might not be
considered new in a few months.

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>In version 3.4, ...</td><td>In the current version, ...</td></tr>
    <tr><td>The Log user statistics feature provides ...</td><td>The new Log user statistics feature provides ...</td></tr>
</table>

## Formatting standards

### Angle brackets for placeholders

Use angle brackets for placeholders. Tell the reader what a placeholder
represents.

1. Create a file named <code><project_name>-medic-os-compose.yml</code>. Where `<project_name>` is the name of one of your project.

### Bold for user interface elements

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>Click <b>Fork</b>.</td><td>Click "Fork".</td></tr>
  <tr><td>Select <b>Other</b>.</td><td>Select 'Other'.</td></tr>
</table>

### Italics to define or introduce new terms

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>By default CouchDB runs in <i>admin party</i> mode, which means you do not need users to read or edit any data.</td><td>By default CouchDB runs in "admin party" mode, which means you do not need users to read or edit any data.</td></tr>
  <tr><td>The <i>keys</i> in <code>.properties</code> files are referred to as <i>terms</i> in POEditor.</td><td>The "keys" in .properties files are referred to as <b>terms</b> in POEditor.</td></tr>
</table>

### Code style for filenames, directories, and paths

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>Open <code>messages-en.properties</code> file.</td><td>Open messages-en.properties file.</td></tr>
  <tr><td>The file is located in <code>/config/standard</code> directory.</td><td>The file is located in /config/standard directory.</td></tr>
  <tr><td>Create <code>medic/translations/messages-en.properties</code> file.</td><td>Create medic/translations/messages-en.properties file.</td></tr>
</table>

### British standard for punctuation inside quotes

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>The doc in the database is a "record".</td><td>The doc in the database is a "record."</td></tr>
  <tr><td>The copy is called a "fork".</td><td>The copy is called a "fork."</td></tr>
</table>

## Inline code formatting

### Code style for inline code and commands

For inline code in an HTML document, use the `<code>` tag. In a Markdown
document, use the backtick (`).

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>The <code>grunt dev-webapp</code> command builds and deploys the webapp.</td><td>The "grunt dev-webapp" command creates a Deployment.</td></tr>
  <tr><td>To upload the configuration from your current directory, use <code>medic-conf --local</code>.</td><td>To upload the configuration from your current directory, use "medic-conf --local".</td></tr>
  <tr><td>Enclose code samples with triple backticks. <code>(```)</code></td><td>Enclose code samples with any other syntax.</td></tr>
</table>


## Code snippet formatting

### Don't include the command prompt

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>export COUCH_NODE_NAME=couchdb@127.0.0.1</td><td>$ export COUCH_NODE_NAME=couchdb@127.0.0.1</td></tr>
</table>

### Separate commands from output

Verify the security settings on CouchDB:

```
curl http://localhost:5984
```

The output is similar to this:

```
{"error":"unauthorized","reason":"Authentication required."}
```



