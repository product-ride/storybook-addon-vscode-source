import React from 'react';
import { useParameter } from '@storybook/api';

interface Results {
  storyPath: string;
  absolutePath: string;
}

const OpenButton = () => {
  const results = useParameter<Results>('vscode', {
    storyPath: '',
    absolutePath: '',
  });
  const { storyPath, absolutePath } = results;
  if (!results || (!storyPath && !absolutePath)) return null;

  const url = storyPath
    ? `vscode://file${storyPath.replace('.stories', '')}`
    : `vscode://file${absolutePath}`;
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img
        style={{
          width: '15px',
        }}
        alt="Open source"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFmUlEQVRoge2ZW2xUVRSGv7XPDHTaFGypEFDQEEFCQouKRiEYhAICBS8PPCAQLwmJD0IQ6EBErUFgBgxE1BCJRA1yEYUHilhKixggYoJYShrQECLUAEUpEqBQOnOWD9PL3DpzaDttjPzJycyss9fa/7/3OnuvfQbu4i7+35Cu7Ny15MBoq0fPrzz97+tpZWZudVmyuqYg7cydxOg6AfNLnsOWrSgescyN7GdGZQABYJsS9NVOy6xyEsaklmUreHPfbDDfIngQ0KCd0XjHBcwUrBO9dtUVZ++qezJZqM4XsKB0HugXgAuRUA7E5oEABQI/5eyqO5RTfGNqa+E6MYVUWFi2CtWFoZ+NF4AqOWNHJ3HnoK28VPt8enW42ZUCprEo+sHF9bINCK+AgGrL0Ck4GkdhtBE+B/LDzakXsHBvBnUN32BkEkok8TDeTlJBIGaaUitgfkk2RopBRjYxCBFv/BIlIhkUukXbUiegsLQfSAkwLMLeighp49PY+iqkKvgrnmDlrw/ecdQFZUNBjhBNvglNZJtWIVoWo2SXMwFrqrLFf2K/UfnZiDltfBXL2L7dckTeWz4SSw8C/RO2ixQRdBQ7DmIF+KoGmNuBw4KOabRYIEvlzMOlLD/RJ2G0RWUFqL0PyHbUe0jEXwiTO2wGLAKbgSFx+hprLPsYvsqn45JZWDoT7J1AuiPyIRxEdDirJ5R2mACFoQk67GfQcrOy0otqS7wFJfNAv0TVjWoC9/BudB3/ZI1j1YTzThxaQ4wo46tYBrLUAYNiveV6mStnC7HEG8rlpicy4bJyFeU1Vo/fEW7sV1znSPn5qekRgWNmwPbmvYPyXrJAAlNNt/pzuFxebDu0u4aPfvyZOIaRR6PJtwexD7GI2kvyikDnAnZibyvD5PRGPBlEiGgiHyliAzcbRuLLj1vvt/UZSLh9WL7KGRqqHN0JhQB66yZ6tbYlfZrTSK5hZA7+/G2J/O/f7SyF/ixIkkLhCC7O3WKEScC1ZIElzYPp1QcsK3wmTmKCTyUj3x4kPQ8EvHnlttrjgNqk0VwuTHZvpLsHbN0EPI7/WUcnq7amkLNaqLoa2+XC3Nsb3EmySQTpmYX0yMKub3CUFu1B8hPZ3OJxiJQTaMi2ay7A7XpnkYVZJs19mJVVDzlr3pG1UBPml8xAzPdYkokxYNvYNReh/pYzETDcSOCY5auY3vkCFu19A8MmjHEjAqbxUsWuuYjW3XAqIlORr42/4lOKqmLq+fYijgAVCvcVIWYdIiZE3tD8aULjoH9fQq9fc6wClTlWWuBwa+V5x81AYdky4N3Q3UbC4SKk0aayW69cesDJrt2sAUYYMUctX+Wk1AmA1yNbRIkwEgBrCeunTeOTFy873rVb0EvR74y/whdxxmijgngCYtftFhEXMJLPx1N8IM1LpL14+EciMhtocChCUPHKmSFlLD/atx3849VCzEQ5FWu39hN0PcLayT/GYxT05m52umuHqRhjLHeFy398nFOfaMQK8I8/RyA4CuVAEzeE9/mjdgIf5tckChbw5pXbNuOBy3fAobetlKSgmFOhcN9jBLSGNROrW28XBysqhxije4EBTl0GDhvkqN3pKZHFXMJqtF1YfrSvMe4ShFwnzdsqIHUvd98accFGxggcctI8NaVEe7Ek90owPT1fYWcHRbwdbUj96/W5g+p14G/TET5L1MzZDEh5tF/n/D8wfXrQLsydk2jXjj7IxV6yx03w1Wi/znm9HmKoNhQZ//FalLU4HDxRLRORt09O9hyJe79DSTqE5a+YpSobCTtrD86NWIVsYA+2Fp0qyPglUawuEQBg+SonKboD8KSldWfA4AEADSpsU2Ot+H1i99hqIA66TADAPRurX7Ds4PqsnCx3t+7uLarywckpnrNdyeku7uK/hn8BSz/K7/HD1OcAAAAASUVORK5CYII="
      />
    </a>
  );
};

export default OpenButton;
