---
title: Cockpit documentation
class: running-cockpit body-cockpit
---

## Installation

To get Cockpit installed and running on your system, follow the instructions on the [installation and running page](/running.html).

After Cockpit is running, visit **ip-address-of-machine:9090** in your web browser. If your browser is on the same machine where Cockpit is running, then visit [localhost:9090](http://localhost:9090/) (for example).

## Usage

[The Red Hat Customer Portal product documentation pages](https://access.redhat.com/pilot-documentation/red_hat_enterprise_linux/8) document how to use the "web console" (another name for Cockpit). While this is specifically for the version of Cockpit that ships in Red Hat Enterprise Linux, the interface and its usage is similar on other distributions where the Cockpit web console exists.

- [Getting started using the RHEL web console](https://access.redhat.com/documentation/en-us/red-hat-enterprise-linux/8/guide/8c44950e-29f0-4150-89a5-036f57bf775e)
- [Managing user accounts in the web console](https://access.redhat.com/documentation/en-us/red-hat-enterprise-linux/8/guide/715670f6-0eb9-4175-a36f-445acd1b1b25)
- [Managing services in the web console](https://access.redhat.com/documentation/en-us/red-hat-enterprise-linux/8/guide/032603a4-660f-4c0b-97ba-20d32479998e)

## Cockpit Guide

The [Cockpit guide](/guide/latest/) contains:

1. [Deployment guide](guide/latest/guide.html) with everything you need to know about deployment beyond what's covered on the installation page.
2. [Feature internals](/guide/latest/features.html) cover the parts of the system Cockpit communicates with.
3. [Developer guide](/guide/latest/development.html) contains topics such as embedding and integrating Cockpit, packages, and the Cockpit API.

## Developer-focused resources

Complimenting the Cockpit guide's developer section, these resources may be useful when developing your own applications using Cockpit.

- [Starter kit](/blog/cockpit-starter-kit.html), the turn-key template for your own pages
- [Using Cockpit test VMs with your own test framework](/blog/cockpit-custom-test-framework.html)
