# Clovercraft SMP Resource Pack

[![Create Release](https://github.com/clovercraft/resource-pack/actions/workflows/release.yml/badge.svg?branch=production&event=workflow_dispatch)](https://github.com/clovercraft/resource-pack/actions/workflows/release.yml)

This repository contains the latest version of the official resource pack maintained for the Clovercraft server, as well as the tooling required to automatically build the resource pack file.

## Using the Resource Pack

The latest version of the resource pack can be downloaded from the [releases page](https://github.com/clovercraft/resource-pack/releases).

To use this resource pack on a server, copy the URL for the latest release, along with the hash, into your `server.properties` file, as follows.

```
resource-pack=[URL for latest release]
resource-pack-sha1=[HASH for the latest release]
```

## Contributing

If you'd like to contribute to this resource pack, you'll need to be a member of the Clovercraft developers group. You are welcome to make changes as you wish, but all updates must recieve final approval from Zenfrii.

 - [Adding custom items](/docs/adding-items.md)
 - [Submitting updates](/docs/pull-requests.md)