import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bot, FileText, Shield, Database, Network, GitBranch, Users, MessageSquare, CheckCircle } from 'lucide-react';
import archDiagram from 'figma:asset/b5a49fba97d8abbb91055a0fcb3159f63c51c6ff.png';
import formSection1And2 from 'figma:asset/4b6ed740f3c3a9ecec8466412abc14eaba19f854.png';
import formSection3 from 'figma:asset/6edacf864eefb5ea717702a9bf609b9314b1a4cf.png';
import botIntegrationDiagram from 'figma:asset/7c42fac4601c3cf61b03e7589cdd49e7ad0f4254.png';
import accessManagementDiagram from 'figma:asset/db4cf198d22b8a29e37e4ca4424249f399455c03.png';
import graphRAGDiagram from 'figma:asset/d5e8376290020e059775aaf6cb7f48f8d87ed3a5.png';

const OporderPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: 'title',
      title: 'Oporder Creation Agent',
      subtitle: 'Intelligent Automation for Operational Order Management',
      company: 'AI-VETS'
    },
    
    // Slide 2: Bot Registration
    {
      type: 'content',
      title: 'Bot Registration & Integration',
      icon: <Bot className="w-12 h-12" />,
      points: [
        'Team-level installation via Azure Active Directory',
        'Automatic availability in all standard channels',
        'Manual addition for private channels',
        '@mention-based triggering with natural language'
      ],
      hasImage: true,
      imagePath: botIntegrationDiagram
    },
    
    // Slide 3: Query Handling & Form Distribution
    {
      type: 'content',
      title: 'Query Handling & Form URL Distribution',
      icon: <MessageSquare className="w-12 h-12" />,
      points: [
        'User initiates "create oporder" command',
        'Bot responds with secure form URL',
        'Seamless redirection to OPORD creation form',
        'Context capture: User ID, Channel ID, Team ID'
      ],
      hasImage: true,
      imagePath: accessManagementDiagram
    },
    
    // Slide 4: Form Schema & Details - Part 1
    {
      type: 'formdetails',
      title: 'OPORD Creation Form - Structure',
      icon: <FileText className="w-12 h-12" />,
      sections: [
        {
          name: '1. References',
          tag: 'REQUIRED',
          fields: ['Higher Headquarters Order', 'Previous Operation Order']
        },
        {
          name: '2. Mission',
          tag: 'CRITICAL',
          fields: ['Mission Statement (WHO, WHAT, WHEN, WHERE, WHY)', 'Personnel Assigned', 'Execution Time', 'Mission Objective', 'Area of Operations']
        }
      ],
      hasImage: true,
      imagePath: formSection1And2
    },
    
    // Slide 5: Form Schema & Details - Part 2
    {
      type: 'formdetails',
      title: 'OPORD Creation Form - Additional Sections',
      icon: <FileText className="w-12 h-12" />,
      sections: [
        {
          name: '3. Administration & Logistics',
          tag: '',
          fields: ['Reference Number', 'Supporting Documents', 'Document Attachment Feature']
        }
      ],
      features: [
        'Prefill from previous OPORDs',
        'Multi-document attachment capability',
        'Authorization workflow with approval',
        'Submit for approval functionality'
      ],
      hasImage: true,
      imagePath: formSection3
    },
    
    // Slide 6: Access Management
    {
      type: 'content',
      title: 'Access Management',
      icon: <Shield className="w-12 h-12" />,
      points: [
        'Microsoft 365 Groups for permission control',
        '"DocGen Editors" - Write access for owners/members',
        '"DocGen Viewers" - Read-only access',
        'Dynamic membership based on Teams channel roles',
        'Microsoft Graph API integration for user information'
      ],
      hasImage: true,
      imagePath: accessManagementDiagram
    },
    
    // Slide 7: Agent Orchestration Architecture
    // {
    //   type: 'content',
    //   title: 'Agent Orchestration Architecture',
    //   icon: <Network className="w-12 h-12" />,
    //   points: [
    //     'RAG Processing Pipeline with Pinecone vector DB',
    //     'Department-based namespace isolation',
    //     'Composite Document Agent for multi-department queries',
    //     'Department-Specific Agents for targeted processing',
    //     'Channel ID-based agent routing'
    //   ],
    //   hasImage: true,
    //   imagePath: graphRAGDiagram
    // },
    
    // Slide 8: Ingestion & Generation
    {
      type: 'flow',
      title: 'Document Ingestion & Generation Flow',
      icon: <Database className="w-12 h-12" />,
      flow: [
        'User Query + User Role',
        'Graph RAG Retrieval',
        'LLM Agent Processing',
        'Multi-Agent Collaboration',
        'Document Preprocessing',
        'SharePoint Distribution via Teams'
      ],
      hasImage: true,
      imagePath: graphRAGDiagram
    },
    
    // Slide 9: Graph RAG Architecture
    // {
    //   type: 'graphrag',
    //   title: 'Graph RAG Architecture',
    //   icon: <Network className="w-12 h-12" />,
    //   points: [
    //     'Document ingestion with Graph RAG structure',
    //     'User query combined with role information',
    //     'LLM Agent processes contextual retrieval',
    //     'Response preprocessing before document generation',
    //     'SharePoint link shared over Teams application'
    //   ],
    //   hasImage: true,
    //   imagePath: archDiagram
    // },
    
    // Slide 10: Version Control - Overview
    {
      type: 'content',
      title: 'Version Control System',
      icon: <GitBranch className="w-12 h-12" />,
      points: [
        'Native SharePoint versioning integration',
        'Automatic version tracking for all modifications',
        'Complete audit trail with user attribution',
        'Rollback capability to previous versions',
        'Timestamp-based version history'
      ],
      visual: 'version'
    },
    
    // Slide 11: Version Control - Implementation
    // {
    //   type: 'content',
    //   title: 'Version Control Implementation',
    //   icon: <Database className="w-12 h-12" />,
    //   points: [
    //     'Centralized storage in Teams document library',
    //     'Folder structure: Document type + Generation date',
    //     'Group-based permissions via Microsoft Graph API',
    //     'Version metadata and change logs',
    //     'Document comparison features'
    //   ],
    //   benefits: [
    //     'Complete institutional memory',
    //     'Compliance and audit readiness',
    //     'Transparent document evolution'
    //   ]
    // },
    
    // Slide 12: Benefits & Value
    {
      type: 'benefits',
      title: 'Key Benefits & Value Proposition',
      icon: <CheckCircle className="w-12 h-12" />,
      columns: [
        {
          title: 'Operational Efficiency',
          items: ['80-90% reduction in manual compilation', 'Standardized document structure', 'Automated permission management']
        },
        {
          title: 'Enhanced Collaboration',
          items: ['Cross-department visibility', 'Real-time access control', 'Version transparency']
        },
        {
          title: 'Knowledge Management',
          items: ['Centralized information access', 'Contextual retrieval', 'Persistent institutional memory']
        }
      ]
    },
    
    // Slide 13: Thank You
    {
      type: 'thankyou',
      title: 'Thank You',
      subtitle: 'Questions & Discussion',
      company: 'Palintere | Vantage'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const renderArchitectureImage = (imagePath) => {
    if (!imagePath) return null;
    
    return (
      <div className="w-full h-full bg-white rounded-xl shadow-lg p-4 flex items-center justify-center overflow-hidden">
        <img 
          src={imagePath}
          alt="Architecture Diagram"
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = '<div class="text-gray-400 text-center"><div class="text-4xl mb-2">📊</div><div>Architecture Diagram</div></div>';
          }}
        />
      </div>
    );
  };

  const renderSlide = (slide) => {
    if (slide.type === 'title' || slide.type === 'thankyou') {
      return (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="text-center space-y-6">
            <h1 className="text-6xl tracking-tight">{slide.title}</h1>
            <p className="text-2xl text-blue-200">{slide.subtitle}</p>
            <div className="mt-12 text-xl text-blue-300">{slide.company}</div>
          </div>
        </div>
      );
    }

    if (slide.type === 'benefits') {
      return (
        <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 to-blue-50 p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-green-600">{slide.icon}</div>
            <h2 className="text-4xl text-gray-800">{slide.title}</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 flex-1">
            {slide.columns.map((col, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
                <h3 className="text-xl text-blue-900 mb-4">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1">��</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (slide.type === 'formdetails') {
      return (
        <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 to-blue-50 p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-blue-600">{slide.icon}</div>
            <h2 className="text-4xl text-gray-800">{slide.title}</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 flex-1">
            <div className="space-y-4">
              {slide.sections && slide.sections.map((section, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg text-blue-900">{section.name}</h3>
                    {section.tag && (
                      <span className={`text-xs px-2 py-1 rounded ${
                        section.tag === 'REQUIRED' ? 'bg-yellow-100 text-yellow-800' : 
                        section.tag === 'CRITICAL' ? 'bg-red-100 text-red-800' : ''
                      }`}>
                        {section.tag}
                      </span>
                    )}
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {section.fields.map((field, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {slide.features && (
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-4 text-white">
                  <h3 className="text-lg mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {slide.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-yellow-300">★</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center">
              {slide.hasImage ? renderArchitectureImage(slide.imagePath) : null}
            </div>
          </div>
        </div>
      );
    }

    if (slide.type === 'flow') {
      return (
        <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 to-blue-50 p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-blue-600">{slide.icon}</div>
            <h2 className="text-4xl text-gray-800">{slide.title}</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="flex flex-col justify-center space-y-3">
              {slide.flow.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-md p-3 border-l-4 border-blue-400">
                      <p className="text-gray-800 text-sm">{step}</p>
                    </div>
                  </div>
                  {idx < slide.flow.length - 1 && (
                    <div className="ml-5 w-0.5 h-6 bg-blue-300"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              {slide.hasImage ? renderArchitectureImage(slide.imagePath) : null}
            </div>
          </div>
        </div>
      );
    }

    if (slide.type === 'graphrag') {
      return (
        <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 to-blue-50 p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-blue-600">{slide.icon}</div>
            <h2 className="text-4xl text-gray-800">{slide.title}</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="space-y-4">
              {slide.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 flex-1">{point}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              {slide.hasImage ? renderArchitectureImage(slide.imagePath) : null}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 to-blue-50 p-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-blue-600">{slide.icon}</div>
          <h2 className="text-4xl text-gray-800">{slide.title}</h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div className="space-y-4">
            {slide.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-gray-700 flex-1">{point}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            {slide.hasImage ? renderArchitectureImage(slide.imagePath) : (
              slide.visual === 'version' ? (
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center space-y-6">
                  <GitBranch className="w-32 h-32 text-orange-600" />
                  <div className="space-y-2 text-center">
                    <div className="text-xl text-gray-800">SharePoint Versioning</div>
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <div className="w-16 h-16 rounded-full bg-orange-200 flex items-center justify-center">v1</div>
                      <div className="text-2xl text-orange-600">→</div>
                      <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center">v2</div>
                      <div className="text-2xl text-orange-600">→</div>
                      <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center">v3</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-full">
                  <div className="text-gray-400 text-6xl">{slide.icon}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 relative">
        {renderSlide(slides[currentSlide])}
      </div>
      
      <div className="bg-gray-800 px-8 py-4 flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>
        
        <div className="text-white text-sm">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-700 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default OporderPresentation;
