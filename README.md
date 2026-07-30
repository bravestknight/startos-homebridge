# Homebridge on StartOS

StartOS package for [Homebridge](https://homebridge.io/), using the official `homebridge/homebridge:latest` image.

## Quick reference

| Item | Value |
| --- | --- |
| Architectures | `x86_64`, `aarch64` |
| Persistent volume | `main` mounted at `/homebridge` |
| Web UI | HTTP on port `8581` |
| Backup | Entire `main` volume |
| Image | `homebridge/homebridge:latest` |

## Behavior

All Homebridge state—including `config.json`, installed plugins, cached accessories, and HomeKit pairing data—is persisted in `/homebridge`. StartOS encrypts the `main` volume in its service backups and restores it before Homebridge starts.

The package uses the upstream Docker entrypoint and waits up to five minutes for the UI port to become available.

## Important networking note

The upstream Homebridge image recommends host networking for HomeKit discovery. StartOS services run in isolated containers and expose the management UI through a StartOS interface instead. The UI and plugins that make outbound connections work normally; HomeKit pairing, mDNS discovery, and plugins requiring LAN broadcast/multicast must be tested on the target StartOS release and network. This is a platform constraint, not an upstream Homebridge configuration change.

## Build

Install the StartOS 0.4 packaging prerequisites, then:

```bash
npm install
make x86       # produces homebridge_x86_64.s9pk
make arm       # produces homebridge_aarch64.s9pk
```

`make universal` creates a multi-architecture package when supported by the configured StartOS tooling. See [UPDATING.md](UPDATING.md) before changing the upstream image.

## Upstream and license

Homebridge is GPL-3.0-or-later. This wrapper packages the official Docker image without modifying it.
