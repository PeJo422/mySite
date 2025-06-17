import React, { useState } from 'react';
import { ChevronDown, ChevronRight, AlertTriangle, Lightbulb, Target } from 'lucide-react';

const AnalyticsMatrix = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [expandedExample, setExpandedExample] = useState(null);

  const analyticsData = [
    {
      type: "Descriptive",
      question: "What happened?",
      complexity: "Low",
      timeToValue: "Days-Weeks",
      businessImpact: "Foundation",
      examples: "Dashboard KPIs, Sales reports",
      pitfalls: "Vanity metrics, Data quality issues",
      realExample: "Amazon's daily revenue dashboard"
    },
    {
      type: "Diagnostic",
      question: "Why did it happen?",
      complexity: "Medium",
      timeToValue: "Weeks",
      businessImpact: "Problem-solving",
      examples: "Root cause analysis, Correlation studies",
      pitfalls: "Correlation vs causation, Analysis paralysis",
      realExample: "Spotify's UI engagement analysis"
    },
    {
      type: "Predictive",
      question: "What will happen?",
      complexity: "High",
      timeToValue: "Months",
      businessImpact: "Planning",
      examples: "Demand forecasting, Churn prediction",
      pitfalls: "Overfitting, Ignoring seasonality",
      realExample: "Netflix show renewal predictions"
    },
    {
      type: "Prescriptive",
      question: "What should we do?",
      complexity: "Very High",
      timeToValue: "Quarters",
      businessImpact: "Optimization",
      examples: "Route optimization, Dynamic pricing",
      pitfalls: "Impractical recommendations, Missing constraints",
      realExample: "UPS ORION delivery optimization"
    },
    {
      type: "Cognitive/AI",
      question: "Can systems think?",
      complexity: "Very High",
      timeToValue: "Quarters",
      businessImpact: "Transformation",
      examples: "NLP, Image recognition, Chatbots",
      pitfalls: "No clear use case, Bias issues",
      realExample: "JPMorgan's COIN document analysis"
    },
    {
      type: "Real-Time",
      question: "What's happening now?",
      complexity: "High",
      timeToValue: "Months",
      businessImpact: "Agility",
      examples: "Fraud detection, Live monitoring",
      pitfalls: "Over-engineering, Scalability issues",
      realExample: "PayPal's real-time fraud detection"
    },
    {
      type: "Strategic/BI",
      question: "How to compete?",
      complexity: "Medium",
      timeToValue: "Weeks-Months",
      businessImpact: "Competitive Advantage",
      examples: "Market analysis, Customer LTV",
      pitfalls: "Short-term focus, No actionable insights",
      realExample: "Walmart's market basket analysis"
    }
  ];

  const complexityLevels = ["Low", "Medium", "High", "Very High"];
  const impactLevels = ["Foundation", "Problem-solving", "Planning", "Optimization", "Transformation", "Agility", "Competitive Advantage"];

  const getComplexityColor = (complexity) => {
    const colors = {
      "Low": "bg-green-100 text-green-800",
      "Medium": "bg-yellow-100 text-yellow-800", 
      "High": "bg-orange-100 text-orange-800",
      "Very High": "bg-red-100 text-red-800"
    };
    return colors[complexity] || "bg-gray-100 text-gray-800";
  };

  const getImpactColor = (impact) => {
    const colors = {
      "Foundation": "bg-blue-100 text-blue-800",
      "Problem-solving": "bg-purple-100 text-purple-800",
      "Planning": "bg-indigo-100 text-indigo-800",
      "Optimization": "bg-pink-100 text-pink-800",
      "Transformation": "bg-cyan-100 text-cyan-800",
      "Agility": "bg-teal-100 text-teal-800",
      "Competitive Advantage": "bg-emerald-100 text-emerald-800"
    };
    return colors[impact] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Analytics Decision Matrix</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Välj rätt analystyp för din affärsutmaning. Klicka på cellerna för att se detaljer, exempel och vanliga misstag.
        </p>
      </div>

      {/* Legend */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-sm">
        <div>
          <h3 className="font-semibold mb-2 flex items-center">
            <Target className="h-4 w-4 mr-2 text-blue-600" />
            Komplexitetsnivå
          </h3>
          <div className="flex flex-wrap gap-2">
            {complexityLevels.map(level => (
              <span key={level} className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(level)}`}>
                {level}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2 flex items-center">
            <Lightbulb className="h-4 w-4 mr-2 text-yellow-600" />
            Affärspåverkan
          </h3>
          <div className="grid grid-cols-2 gap-1">
            {impactLevels.map(impact => (
              <span key={impact} className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(impact)}`}>
                {impact}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Matrix */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {analyticsData.map((item, index) => (
          <div key={item.type} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div 
              className="p-6 cursor-pointer"
              onClick={() => setSelectedCell(selectedCell === index ? null : index)}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">{item.type}</h3>
                {selectedCell === index ? <ChevronDown className="h-5 w-5 text-gray-400" /> : <ChevronRight className="h-5 w-5 text-gray-400" />}
              </div>
              
              <p className="text-sm text-gray-600 mb-4 font-medium">"{item.question}"</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Komplexitet:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(item.complexity)}`}>
                    {item.complexity}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Tid till värde:</span>
                  <span className="text-xs font-medium text-gray-700">{item.timeToValue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Påverkan:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(item.businessImpact)}`}>
                    {item.businessImpact}
                  </span>
                </div>
              </div>
            </div>

            {selectedCell === index && (
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                      Verkligt Exempel
                    </h4>
                    <p className="text-sm text-gray-700 bg-white p-3 rounded-lg border-l-4 border-blue-500">
                      {item.realExample}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Typiska Tillämpningar</h4>
                    <p className="text-sm text-gray-600">{item.examples}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                      Vanliga Misstag
                    </h4>
                    <p className="text-sm text-red-700 bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                      {item.pitfalls}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Decision Guide */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Beslutsstöd: Välj Rätt Analystyp</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">🚀 Börja med dessa om du är ny:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Descriptive:</strong> Bygg grundläggande rapporter och KPIs</li>
              <li>• <strong>Diagnostic:</strong> Analysera varför saker händer</li>
              <li>• <strong>Strategic/BI:</strong> Förstå dina kunder och marknaden</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">⚡ Avancerade för mogna organisationer:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Predictive:</strong> När du har ren data och tydliga patterns</li>
              <li>• <strong>Prescriptive:</strong> För komplexa optimeringsutmaningar</li>
              <li>• <strong>Real-Time:</strong> När timing är affärskritisk</li>
              <li>• <strong>Cognitive/AI:</strong> För automation och innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsMatrix;
