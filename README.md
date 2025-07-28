# Finnrick Widget

- This is a widget for Finnrick.

## Prerequisites

- Node.js
- Yarn

## Tech Stack

- React
- Vite
- TypeScript
- Rollup

### Installing Dependencies

To install the dependencies, you can use the following commands:

```bash
yarn install
```

### Running the Development Server

To run the development server, you can use the following command:

```bash
yarn run dev
```

### Opening the Widget in Your Browser

Once the development server is running, you can open your browser and navigate to `http://localhost:5173` to see the widget in action.

## Testing the widget

To test the bundled widget, you can use the following commands:

```bash
yarn run build:widget
```

```bash
yarn run serve
```

```bash
yarn run serve:widget
```

This will start a local server and serve the widget at `http://localhost:3333`.

## Usage in production

```html
<script
  src="https://your-cdn.com/widget.js"
  data-client-key="YOUR_CLIENT_KEY"
></script>
```

## Distribution Approach Recommendation

- CDN-hosted JavaScript bundle: Single <script> tag inclusion
- Caching strategy: 5-minute cache with fallback to last known good data
- CDN edge caching: Reduced latency with geographic distribution
