# Adding a new lab member

Lab member webpages are stored in ```_members/```.  Check out existing profiles for examples. All ```[text]``` below is placeholder text. 

* Upload your photo to ```images/team/[first]-[last].[jpg/png]```

* Create a new file titled ```_members/[first]-[last].md``` that contains the following:

```
---
name: [Full Name]
image: images/team/[first-last].[jpg/png]
role: [phd/masters/undergrad/postdoc]
description: [Undergraduate/Graduate] Student in [Field]
links:
  home-page: [your website url, optional]
  email: [your email, optional]
  github: [your github handle, optional]
  orcid: [your ORCiD, optional]
  google-scholar: [your Google Scholar id, optional]
  linkedin: [your LinkedIn id, optional]
  twitter: [your Twitter username, optional]
---

[Your 1-2 paragraph bio goes here.]
```

* Delete any optional lines that you did not fill out.

* Commit and push your changes, and check the website in 5 minutes to verify that your page has been added properly.

# Adding a new publication

Publications are stored in ```_data/sources.yaml```. 

## Naming conventions
* Upload any publication-related documents and images to ```pubs/```.
* For papers with 1-3 authors, use the following notation: ```pubs/[lastname1]-[lastname2]-[lastname3]-[venue][year]-[keyword]-[type].[ext]```. 
* For papers with >3 authors, use the following notation: ```pubs/[lastname1]-[venue][year]-[keyword]-[type].[ext]```. 
* Example 1: ```pubs/karli-fitzgerald-langrob23-ambiguities-paper.pdf```
* Example 2: ```pubs/karli-fitzgerald-langrob23-ambiguities-poster.pdf```
* Example 3: ```pubs/fitzgerald-corl22-inquire-thumbnail.png```

## Automatically adding  citations with identifiers
If your publication has a doi, ISBN, or is on arXiv, you do not need to upload the paper PDF. 

* Add an entry to ```_data/sources.yaml``` like this:
```
# Abstraction in data-sparse task transfer
- id: doi:10.1016/j.artint.2021.103551
  tags:
    - Journal
    - task representations
    - abstraction
```

* After you commit your changes, a GitHub action will process the doi/ISBN/arXiv info and create the citation automatically. 
* Monitor this process by going to the [GitHub Actions](https://github.com/iqr-lab/iqr-lab.github.io/actions) page and verify that there are no errors. If there is an error, you may need to add the citation manually instead.
* You can override any field of the citation by adding it to your entry. See the (docs)[https://greene-lab.gitbook.io/lab-website-template-docs/basics/citations] for more information.

## Manually adding citations

If your publication does not have an identifier (such as a workshop paper), you will need to upload the paper pdf and link to it manually.

* Add an entry to ```_data/sources.yaml``` like this:
```
- link: https://iqr.cs.yale.edu/pubs/karli-fitzgerald-langrob23-ambiguities.pdf
  title: Resolving Ambiguities in LLM-enabled Human-Robot Collaboration
  authors:
    - Ulas Berk Karli
    - Tesca Fitzgerald
  publisher: CoRL Workshop on Language and Robot Learning
  date: "2023-11-06"
  tags:
    - Workshop
    - LLMs
    - ambiguity
    - self-assessment
```

## Adding tags and buttons

### Tags

* Your first tag should indicate the publication type: Conference/Workshop/Journal/Thesis/Book. 
* Next, check see if there are any pre-existing tags that are also relevant to your paper.
* Finally, add any new tags you'd like to highlight for your paper.

### Poster, video, code, and blog buttons

Add any relevant buttons like this:
```
  buttons:
    - type: poster
      link: https://iqr.cs.yale.edu/pubs/fitzgerald-corl22-inquire-poster.pdf
    - type: video
      link: https://www.youtube.com/watch?v=X3uewsq6-Gc
    - type: source
      link: https://github.com/HARPLab/inquire
    - type: blog
      link: https://iqr.cs.yale.edu/2024/03/13/learning-from-corrections.html
```

### Linking to a project

If you'd like to link your publication to a particular project page, add a new field like this: 
```
  project: llms
```

The project name must match the ```project-tag``` field in your project page.

# Adding a new project

# Adding a new blog post
