# GroupAlerts

GrouAlerts is a Discord bot that provides raid alerts in a designated channel.

## Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HathHub/GroupAlerts.git
   ```

2. Navigate to the project directory:

   ```bash
   cd GroupAlerts
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. **Replace Discord Bot Tokens:**
   - Replace the selfbot token (`selfbotClient.login(...)`) with your own selfbot token.
   - Replace the normal bot token (`normalClient.login(...)`) with your own normal bot token.

2. **Change Alert Channel ID:**
   - Replace the channel ID in the line where `alertChannel` is assigned:
     ```javascript
     alertChannel = normalClient.channels.cache.get("YOUR_CHANNEL_ID_HERE");
     ```
     Replace `"YOUR_CHANNEL_ID_HERE"` with the actual ID of the Discord channel where you want to send raid alerts.

After making these changes, your modified code should look something like this:

```javascript
selfbotClient.login("YOUR_SELF_BOT_TOKEN_HERE");
normalClient.login("YOUR_NORMAL_BOT_TOKEN_HERE");
```

Make sure to replace `"YOUR_SELF_BOT_TOKEN_HERE"`, `"YOUR_NORMAL_BOT_TOKEN_HERE"`, and `"YOUR_CHANNEL_ID_HERE"` with your actual selfbot token, normal bot token, and channel ID, respectively.

### Usage

Run the bot using the following command:

```bash
node index.js
```

GrouAlerts will now be active and ready to provide raid alerts in the designated channel.

## Disclaimer

This project utilizes a selfbot, which is discouraged by Discord's Terms of Service. The inclusion of a selfbot in this project is solely for educational purposes to showcase and learn about Discord bot development.

**Important Note:**
- Usage of selfbots violates Discord's Terms of Service, and it is strongly advised not to use selfbots in a production environment or on any server where you do not have explicit permission.
- I do not encourage or endorse any misuse of Discord's platform.
