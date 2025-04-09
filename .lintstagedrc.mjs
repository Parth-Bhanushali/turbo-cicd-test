export function getConfig(withEslint) {
  if (withEslint) {
    return {
      '*.{html,css}': 'prettier --write',
      '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    }
  } else {
    return {
      '*.{js,jsx,ts,tsx,html,css}': 'prettier --write',
    }
  }
}

const config = getConfig(true);
export default config;