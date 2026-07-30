# Updating Homebridge

## Determining the upstream version

This package intentionally pulls `homebridge/homebridge:latest` at `startos/manifest/index.ts` → `images.homebridge.source.dockerTag`, as requested for development. The official image documents its available tags and supported architectures at <https://github.com/homebridge/docker-homebridge>.

## Applying a production bump

1. Choose and test a concrete stable Homebridge Docker tag for both `amd64` and `arm64`.
2. Replace `homebridge/homebridge:latest` in `startos/manifest/index.ts` with that tag.
3. Update `version` and release notes in `startos/versions/current.ts`; reset the downstream revision to `0` for an upstream bump.
4. Build and test both `make x86` and `make arm` before publishing.

Do not publish a production registry release from a mutable `latest` image tag: package builds must be reproducible.
