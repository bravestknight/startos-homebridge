# Homebridge

Open the **Homebridge UI** interface from the StartOS service page. On first launch, complete the Homebridge onboarding flow and store the generated administrator credentials safely.

Configuration, plugins, cached accessories, and HomeKit pairing information are persisted by StartOS. Include this service in your regular StartOS backups before making large plugin or configuration changes.

## HomeKit networking

Homebridge and its plugins can require multicast DNS / Bonjour and LAN broadcasts for discovery and pairing. StartOS isolates services from the host network; test HomeKit pairing and discovery on your local network after installation. If a plugin requires direct host networking, it may not be compatible with StartOS isolation.

## Updating

The package currently follows `homebridge/homebridge:latest`, so the underlying upstream contents can change without a wrapper version change. Before publishing a registry release, pin the image to a tested upstream tag and update `startos/versions/current.ts` to match that upstream release.
