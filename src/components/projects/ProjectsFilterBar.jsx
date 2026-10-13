import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export default function ProjectsFilterBar({ filters, setFilters, clearFilters, count }) {
  const handleChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="filter-container">
      <div className="dropdown-row">
        {/* 1. EXPERTISE */}
        <div className="dropdown-wrapper">
          <select 
            className="dropdown-select" 
            value={filters.expertise} 
            onChange={(e) => handleChange('expertise', e.target.value)}
          >
            <option value="">EXPERTISE</option>
            <option value="ARCHITECTURE">ARCHITECTURE</option>
            <option value="INTERIOR ARCHITECTURE">INTERIOR ARCHITECTURE</option>
            <option value="MASTERPLANS">MASTERPLANS</option>
            <option value="VIRTUAL SPACES">VIRTUAL SPACES</option>
            <option value="PRODUCTS">PRODUCTS</option>
            <option value="EXHIBITIONS">EXHIBITIONS</option>
            <option value="INSTALLATIONS + PAVILIONS">INSTALLATIONS + PAVILIONS</option>
          </select>
          <FaChevronDown className="select-dropdown-icon" />
        </div>

        {/* 2. TYPOLOGIES */}
        <div className="dropdown-wrapper">
          <select 
            className="dropdown-select" 
            value={filters.typologies} 
            onChange={(e) => handleChange('typologies', e.target.value)}
          >
            <option value="">TYPOLOGIES</option>
            <option value="TRANSPORT + INFRASTRUCTURE">TRANSPORT + INFRASTRUCTURE</option>
            <option value="SPORTS">SPORTS</option>
            <option value="MIXED USE">MIXED USE</option>
            <option value="TALL BUILDINGS">TALL BUILDINGS</option>
            <option value="OFFICES">OFFICES</option>
            <option value="HERITAGE + REGENERATION">HERITAGE + REGENERATION</option>
            <option value="EDUCATION">EDUCATION</option>
            <option value="CIVIC">CIVIC</option>
            <option value="CULTURE">CULTURE</option>
            <option value="RETAIL">RETAIL</option>
            <option value="RESIDENTIAL">RESIDENTIAL</option>
          </select>
          <FaChevronDown className="select-dropdown-icon" />
        </div>

        {/* 3. CONSTRUCTION STATUS */}
        <div className="dropdown-wrapper">
          <select 
            className="dropdown-select" 
            value={filters.status} 
            onChange={(e) => handleChange('status', e.target.value)}
          >
            <option value="">CONSTRUCTION STATUS</option>
            <option value="COMPLETE">COMPLETE</option>
            <option value="UNDER CONSTRUCTION">UNDER CONSTRUCTION</option>
            <option value="PLANNING">PLANNING</option>
            <option value="CONCEPT">CONCEPT</option>
            <option value="DESIGN">DESIGN</option>
          </select>
          <FaChevronDown className="select-dropdown-icon" />
        </div>

        {/* 4. COUNTRY */}
        <div className="dropdown-wrapper">
          <select 
            className="dropdown-select" 
            value={filters.country} 
            onChange={(e) => handleChange('country', e.target.value)}
          >
            <option value="">COUNTRY</option>
            <option value="AUSTRALIA">AUSTRALIA</option>
            <option value="AUSTRIA">AUSTRIA</option>
            <option value="AZERBAIJAN">AZERBAIJAN</option>
            <option value="THE BAHAMAS">THE BAHAMAS</option>
            <option value="BELGIUM">BELGIUM</option>
            <option value="CHINA">CHINA</option>
            <option value="CYPRUS">CYPRUS</option>
            <option value="CZECH REPUBLIC">CZECH REPUBLIC</option>
            <option value="GERMANY">GERMANY</option>
            <option value="INDIA">INDIA</option>
            <option value="ITALY">ITALY</option>
            <option value="MEXICO">MEXICO</option>
            <option value="RUSSIA">RUSSIA</option>
            <option value="SAUDI ARABIA">SAUDI ARABIA</option>
            <option value="SPAIN">SPAIN</option>
            <option value="SWITZERLAND">SWITZERLAND</option>
            <option value="UNITED ARAB EMIRATES">UNITED ARAB EMIRATES</option>
            <option value="UNITED KINGDOM">UNITED KINGDOM</option>
            <option value="UNITED STATES">UNITED STATES</option>
          </select>
          <FaChevronDown className="select-dropdown-icon" />
        </div>

        {/* 5. REGION */}
        <div className="dropdown-wrapper">
          <select 
            className="dropdown-select" 
            value={filters.region} 
            onChange={(e) => handleChange('region', e.target.value)}
          >
            <option value="">REGION</option>
            <option value="AFRICA">AFRICA</option>
            <option value="AMERICAS">AMERICAS</option>
            <option value="ASIA">ASIA</option>
            <option value="EUROPE">EUROPE</option>
            <option value="MIDDLE EAST">MIDDLE EAST</option>
            <option value="OCEANIA">OCEANIA</option>
          </select>
          <FaChevronDown className="select-dropdown-icon" />
        </div>
      </div>

      <div className="filter-meta">
        <span className="clear" onClick={clearFilters}>CLEAR ALL</span> 
        <span className="count-box">
          <span className="count">{count}</span> <span className="count-text">PROJECTS</span>
        </span>
      </div>
    </section>
  );
}
