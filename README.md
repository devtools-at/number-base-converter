# Number Base Converter

<p align="center">
  <a href="https://devtools.at/tools/number-base-converter"><img src="https://img.shields.io/badge/Try%20Online-DevTools.at-blue?style=for-the-badge" alt="Try Online"></a>
  <a href="https://www.npmjs.com/package/@devtools-at/number-base-converter"><img src="https://img.shields.io/npm/v/@devtools-at/number-base-converter?style=for-the-badge" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@devtools-at/number-base-converter"><img src="https://img.shields.io/npm/dm/@devtools-at/number-base-converter?style=for-the-badge" alt="npm downloads"></a>
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript Ready">
</p>

<p align="center">
  <b>Convert numbers between bases</b>
</p>

<p align="center">
  <a href="https://devtools.at/tools/number-base-converter">Online Tool</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#api">API</a> •
  <a href="#license">License</a>
</p>

---

## Why Use This Package?

- **Zero Dependencies** - Lightweight with no external dependencies
- **TypeScript Support** - Full type definitions included
- **Browser & Node.js** - Works in both environments
- **UTF-8 Support** - Handles international characters correctly
- **Well Tested** - Comprehensive test coverage

## Installation

```bash
# npm
npm install @devtools-at/number-base-converter

# yarn
yarn add @devtools-at/number-base-converter

# pnpm
pnpm add @devtools-at/number-base-converter
```

## Usage

```typescript
import { process } from '@devtools-at/number-base-converter';

// Process your data
const result = process(inputData);
console.log(result);
```

### ESM Import

```typescript
import { encode, decode } from '@devtools-at/number-base-converter';
```

### CommonJS Require

```javascript
const { encode, decode } = require('@devtools-at/number-base-converter');
```

### Browser (CDN)

```html
<script src="https://unpkg.com/@devtools-at/number-base-converter"></script>
<script>
  const result = DevToolsNumberBaseConverter.encode('data');
</script>
```

## API Reference

### `encode(input: string): string`

Encodes the input string.

**Parameters:**
- `input` - The string to encode

**Returns:** The encoded string

### `decode(input: string): string`

Decodes the encoded string back to original.

**Parameters:**
- `input` - The encoded string to decode

**Returns:** The decoded string

**Throws:** Error if input is invalid

---

## Try It Online

Don't want to install anything? Use our free online tool:

### **[Number Base Converter - DevTools.at](https://devtools.at/tools/number-base-converter)**

Features of the online tool:
- No registration required
- Works directly in your browser
- Your data never leaves your device
- Available in 20+ languages

---

## Related Tools

Check out our other free developer tools at [DevTools.at](https://devtools.at):

| Tool | Description |
|------|-------------|
| [JSON Formatter](https://devtools.at/tools/json-formatter) | Format and validate JSON |
| [Base64 Encoder](https://devtools.at/tools/base64) | Encode/decode Base64 |
| [Hash Generator](https://devtools.at/tools/hash-generator) | Generate MD5, SHA hashes |
| [UUID Generator](https://devtools.at/tools/uuid-generator) | Generate random UUIDs |
| [Password Generator](https://devtools.at/tools/password-generator) | Create secure passwords |
| [JWT Decoder](https://devtools.at/tools/jwt-decoder) | Decode JSON Web Tokens |
| [URL Encoder](https://devtools.at/tools/url-encoder) | Encode URL parameters |
| [Color Converter](https://devtools.at/tools/color-converter) | Convert color formats |

[View all 100+ tools →](https://devtools.at)

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <a href="https://devtools.at">
    <img src="https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20by-DevTools.at-blue?style=flat-square" alt="Made by DevTools.at">
  </a>
</p>

<p align="center">
  <sub>Free Online Developer Tools - No Registration Required</sub>
</p>
