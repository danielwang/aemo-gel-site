import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

const colorGroups = [
  {
    name: 'Core Purple',
    colors: [
      { name: 'Dark Purple', hex: '#3C1053' },
      { name: 'Purple Primary', hex: '#6B3077' },
      { name: 'Purple Pop', hex: '#B056BC' },
    ],
  },
  {
    name: 'Minimal Two-Colour',
    colors: [
      { name: 'Electricity', hex: '#6B3077' },
      { name: 'Gas', hex: '#34B9B3' },
      { name: 'Price', hex: '#6B3077' },
      { name: 'Demand', hex: '#34B9B3' },
      { name: 'Generation', hex: '#6B3077' },
    ],
  },
  {
    name: 'Core Fuels',
    colors: [
      { name: 'Coal', hex: '#333536' },
      { name: 'Black Coal', hex: '#333536' },
      { name: 'Brown Coal', hex: '#97785C' },
      { name: 'Biomass', hex: '#A82140' },
      { name: 'Gas', hex: '#34B9B3' },
      { name: 'Liquid Fuels', hex: '#FE5F55' },
      { name: 'Solar', hex: '#FFD565' },
      { name: 'Wind', hex: '#A1D978' },
      { name: 'Hydro', hex: '#ADE0EE' },
      { name: 'Renewables', hex: '#E1EE8E' },
      { name: 'Battery', hex: '#B056BC' },
      { name: 'Demand Side', hex: '#5666BC' },
      { name: 'Distillate', hex: '#B4A19D' },
    ],
  },
  {
    name: 'States',
    colors: [
      { name: 'ACT', hex: '#FFD565' },
      { name: 'NSW', hex: '#ADE0EE' },
      { name: 'Victoria', hex: '#777DA7' },
      { name: 'Queensland', hex: '#A82140' },
      { name: 'South Australia', hex: '#FE5F55' },
      { name: 'Tasmania', hex: '#A1D978' },
      { name: 'Western Australia', hex: '#3C1053' },
    ],
  },
  {
    name: 'Electricity Categories',
    colors: [
      { name: 'Business', hex: '#5666BC' },
      { name: 'Residential', hex: '#FFD565' },
      { name: 'Residential and Business', hex: '#FE5F55' },
      { name: 'Electric Vehicles', hex: '#B056BC' },
      { name: 'Losses', hex: '#D4DADD' },
      { name: 'Rooftop PV', hex: '#FFED90' },
      { name: 'Operational (Sent-Out)', hex: '#702F73' },
      { name: 'Operational (As Generated)', hex: '#360F3C' },
      { name: 'Auxiliary', hex: '#ADE0EE' },
      { name: 'Native (Sent-Out)', hex: '#360F3C' },
      { name: 'Small Non Scheduled Generation', hex: '#777DA7' },
      { name: 'Energy Efficiency', hex: '#A1D978' },
      { name: 'Price Impact', hex: '#A82140' },
      { name: 'Electrification', hex: '#E2A8EA' },
      { name: 'Hydrogen production', hex: '#73D7F2' },
    ],
  },
  {
    name: 'Gas Categories',
    colors: [
      { name: 'Residential and Commercial', hex: '#FE5F55' },
      { name: 'Industrial', hex: '#5666BC' },
      { name: 'GPG (Global Power Generation)', hex: '#087570' },
      { name: 'LNG (Liquefied Natural Gas)', hex: '#34B9B3' },
      { name: 'Losses', hex: '#D4DADD' },
      { name: 'Total', hex: '#702F73' },
      { name: 'Energy Efficiency', hex: '#A1D978' },
      { name: 'Price Impact', hex: '#A82140' },
      { name: 'Fuel Switching', hex: '#97785C' },
      { name: 'Climate Change', hex: '#E0EE8E' },
    ],
  },
  {
    name: 'Technology',
    colors: [
      { name: 'Landfill Gas', hex: '#5CDCD6' },
      { name: 'Natural Gas', hex: '#34B9B3' },
      { name: 'OCGT', hex: '#34B9B3' },
      { name: 'Peaking Gas & Liquids', hex: '#34B9B3' },
      { name: 'CCGT', hex: '#248B86' },
      { name: 'COGEN', hex: '#08534F' },
      { name: 'Rooftop PV (Photovoltaics)', hex: '#FFED90' },
      { name: 'Solar', hex: '#FFD565' },
      { name: 'FFP PV', hex: '#FFD565' },
      { name: 'CST (Concentrated Solar Energy)', hex: '#FFD565' },
      { name: 'Distributed PV', hex: '#FFD565' },
      { name: 'SAT PV', hex: '#FFB546' },
      { name: 'Solar Thermal', hex: '#FFB546' },
      { name: 'Hydro', hex: '#ADE0EE' },
      { name: 'Pumped Hydro', hex: '#6DC1D8' },
      { name: 'Pumped Hydro Generation', hex: '#6DC1D8' },
      { name: 'Pumped Hydro Load', hex: '#ADE0EE' },
      { name: 'Battery', hex: '#B056BC' },
      { name: 'Other Behind the Meter Battery', hex: '#B056BC' },
      { name: 'VPP Battery', hex: '#B056BC' },
      { name: 'Large Scale Battery', hex: '#B056BC' },
      { name: 'Large Scale Battery Generation', hex: '#B056BC' },
      { name: 'Large Scale Battery Load', hex: '#D77EE2' },
      { name: 'VPP Battery Load', hex: '#E2A7EA' },
      { name: 'Utility Storage Generation', hex: '#80278B' },
      { name: 'Utility Storage Load', hex: '#C28FD0' },
      { name: 'DSP (Demand Side Participation)', hex: '#5666BC' },
      { name: 'Wholesale Demand Response', hex: '#5666BC' },
      { name: 'Commercial Demand Response', hex: '#5666BC' },
      { name: 'RERT (Reliability and Emergency Reserve Trader)', hex: '#5666BC' },
      { name: 'Involuntary Load Shedding', hex: '#5666BC' },
      { name: 'VPP (Virtual Power Plant)', hex: '#5666BC' },
      { name: 'Other Behind the Meter', hex: '#5666BC' },
      { name: 'Distributed Storage', hex: '#D4DADD' },
      { name: 'Distributed Storage Load', hex: '#D4DADD' },
      { name: 'Distributed Storage Generation', hex: '#A096A0' },
    ],
  },
];

const flatColors = colorGroups.reduce((items, group) => {
  return items.concat(group.colors.map((color) => ({ ...color, group: group.name })));
}, []);

const uniqueColors = Array.from(new Map(flatColors.map((color) => [color.hex, color])).values());

function getTextColor(hex) {
  const value = hex.replace('#', '');
  const number = parseInt(value, 16);
  const r = (number >> 16) & 255;
  const g = (number >> 8) & 255;
  const b = number & 255;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.65 ? '#111111' : '#FFFFFF';
}

function ColorPicker() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [selectedHex, setSelectedHex] = useState('#6B3077');
  const [copiedHex, setCopiedHex] = useState('');

  const visibleColors = useMemo(() => {
    const baseColors = selectedGroup === 'All'
      ? flatColors
      : flatColors.filter((color) => color.group === selectedGroup);

    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return baseColors;
    }

    return baseColors.filter((color) => (
      color.name.toLowerCase().includes(query)
      || color.group.toLowerCase().includes(query)
      || color.hex.toLowerCase().includes(query)
    ));
  }, [searchTerm, selectedGroup]);

  const selectedColor = flatColors.find((color) => color.hex === selectedHex) || uniqueColors[0];

  const handleSelect = (hex) => {
    setSelectedHex(hex);
  };

  const handleCopy = async (hex) => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch (error) {
      const input = document.createElement('input');
      input.value = hex;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }

    setSelectedHex(hex);
    setCopiedHex(hex);

    window.setTimeout(() => {
      setCopiedHex('');
    }, 1400);
  };

  return (
    <Widget>
      <Sidebar>
        <PreviewPanel>
          <PreviewSwatch style={{ backgroundColor: selectedColor.hex }} />
          <PreviewName>{selectedColor.name}</PreviewName>
          <PreviewGroup>{selectedColor.group}</PreviewGroup>
          <PreviewCode
            type="button"
            onClick={() => handleCopy(selectedColor.hex)}
          >
            <code>{selectedColor.hex}</code>
            <span>{copiedHex === selectedColor.hex ? 'Copied' : 'Copy'}</span>
          </PreviewCode>
        </PreviewPanel>

        <SectionTitle>Palette</SectionTitle>
        <QuickPalette>
          {uniqueColors.map((color) => (
            <PaletteButton
              key={color.hex}
              type="button"
              aria-label={`${color.name} ${color.hex}`}
              title={`${color.name} ${color.hex}`}
              isSelected={selectedHex === color.hex}
              style={{ backgroundColor: color.hex }}
              onClick={() => handleSelect(color.hex)}
            />
          ))}
        </QuickPalette>
      </Sidebar>

      <Content>
        <Toolbar>
          <SearchInput
            type="text"
            placeholder="Search by name, group, or hex"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <FilterWrap>
            <FilterButton
              type="button"
              isActive={selectedGroup === 'All'}
              onClick={() => setSelectedGroup('All')}
            >
              All
            </FilterButton>
            {colorGroups.map((group) => (
              <FilterButton
                key={group.name}
                type="button"
                isActive={selectedGroup === group.name}
                onClick={() => setSelectedGroup(group.name)}
              >
                {group.name}
              </FilterButton>
            ))}
          </FilterWrap>
        </Toolbar>

        <CardGrid>
          {visibleColors.map((color, index) => (
            <ColorCard
              key={`${color.group}-${color.name}-${color.hex}-${index}`}
              type="button"
              onClick={() => handleSelect(color.hex)}
            >
              <CardSwatch style={{ backgroundColor: color.hex }} />
              <CardBody>
                <CardMeta>
                  <div>
                    <CardTitle>{color.name}</CardTitle>
                    <CardGroup>{color.group}</CardGroup>
                  </div>
                  <SwatchBadge
                    style={{
                      backgroundColor: color.hex,
                      color: getTextColor(color.hex),
                    }}
                  >
                    swatch
                  </SwatchBadge>
                </CardMeta>
                <CodeButton
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleCopy(color.hex);
                  }}
                >
                  <code>{color.hex}</code>
                  <span>{copiedHex === color.hex ? 'Copied' : 'Tap to copy'}</span>
                </CodeButton>
              </CardBody>
            </ColorCard>
          ))}
        </CardGrid>

        {visibleColors.length === 0 && (
          <EmptyState>No colors match that search.</EmptyState>
        )}
      </Content>

      {copiedHex && <Toast>{copiedHex} copied to clipboard</Toast>}
    </Widget>
  );
}

const Widget = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 996px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PreviewPanel = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 1.25rem;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.08);
`;

const PreviewSwatch = styled.div`
  height: 10rem;
  border-radius: 1.25rem;
  margin-bottom: 1rem;
`;

const PreviewName = styled.h3`
  margin-bottom: 0.25rem;
`;

const PreviewGroup = styled.p`
  color: var(--gel-color-tertiary-slate-500);
  margin-bottom: 1rem;
`;

const PreviewCode = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border: 1px solid #d1d5db;
  background: #ffffff;
  border-radius: 1rem;
  padding: 0.875rem 1rem;
  cursor: pointer;

  code {
    font-size: 1rem;
    font-weight: 700;
    color: var(--gel-color-tertiary-black);
  }

  span {
    color: var(--gel-color-tertiary-slate-500);
    font-size: 0.875rem;
  }
`;

const SectionTitle = styled.h4`
  margin: 0;
`;

const QuickPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 1rem;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.08);
`;

const PaletteButton = styled.button`
  height: 2.5rem;
  border-radius: 0.875rem;
  border: ${(props) => (props.isSelected ? '2px solid #111111' : '2px solid #ffffff')};
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Toolbar = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 1rem;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.08);
`;

const SearchInput = styled.input`
  width: 100%;
  height: 2.75rem;
  border: 1px solid #d1d5db;
  border-radius: 1rem;
  padding: 0 1rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
`;

const FilterWrap = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  border: 1px solid ${(props) => (props.isActive ? 'var(--gel-color-primary-purple-500)' : '#d1d5db')};
  background: ${(props) => (props.isActive ? 'var(--gel-color-primary-purple-500)' : '#ffffff')};
  color: ${(props) => (props.isActive ? '#ffffff' : 'var(--gel-color-tertiary-black)')};
  border-radius: 999px;
  padding: 0.5rem 0.875rem;
  cursor: pointer;
  font-size: 0.875rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
`;

const ColorCard = styled.button`
  background: #ffffff;
  border: 0;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.08);
  text-align: left;
  cursor: pointer;
`;

const CardSwatch = styled.div`
  height: 6rem;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.div`
  font-weight: 700;
  line-height: 1.3;
`;

const CardGroup = styled.div`
  font-size: 0.8125rem;
  color: var(--gel-color-tertiary-slate-500);
  margin-top: 0.25rem;
`;

const SwatchBadge = styled.span`
  border-radius: 999px;
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
`;

const CodeButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border: 1px solid #d1d5db;
  background: #ffffff;
  border-radius: 1rem;
  padding: 0.75rem 0.875rem;
  cursor: pointer;

  code {
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--gel-color-tertiary-black);
  }

  span {
    color: var(--gel-color-tertiary-slate-500);
    font-size: 0.8125rem;
  }
`;

const EmptyState = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 2.5rem 1rem;
  text-align: center;
  color: var(--gel-color-tertiary-slate-500);
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.08);
`;

const Toast = styled.div`
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  background: #111111;
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.2);
  z-index: 20;
`;

export default ColorPicker;
