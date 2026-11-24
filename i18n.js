(function () {
    "use strict";

    var STORAGE_KEY = "geopro-lang";

    // TRADUCCIONES: español a la izquierda, inglés a la derecha.
    // Para cambiar una traducción, edita solo el texto en inglés entre comillas.
    // Conserva el texto en español igual al que aparece en la página.
    var EN = {
        // Navegación y portada
        "Soluciones profesionales": "Professional solutions",
        "Inicio": "Home",
        "Servicios": "Services",
        "Nosotros": "About us",
        "Contacto": "Contact",
        "Idioma": "Language",
        "Español": "Spanish",
        "Inglés": "English",
        "SOLUCIONES PROFESIONALES": "PROFESSIONAL SOLUTIONS",
        "Construimos el futuro": "We build the future",
        "con seguridad.": "with safety.",
        "Ofrecemos soluciones profesionales para proyectos, desde los estudios técnicos y trámites de evaluación ambiental hasta la preparación del terreno (anclajes y drenajes para estabilización y demoliciones para nivelar y ampliar áreas).": "We provide professional solutions for projects, from technical studies and environmental assessment procedures to site preparation, including anchors and drainage for stabilization, as well as demolition to level and expand areas.",
        "En GEOPRO ofrecemos soluciones profesionales utilizando experiencia e innovación.": "At GEOPRO we offer professional solutions built on experience and innovation.",
        "Ver servicios": "View services",
        "Contáctanos": "Contact us",
        "Años de experiencia": "Years of experience",
        "Proyectos realizados": "Completed projects",
        "Compromiso": "Commitment",
        "Los estudios de suelo permiten conocer la capacidad de carga del terreno y diseñar cimentaciones adecuadas, prevenir problemas y construir seguro.": "Soil studies reveal the bearing capacity of the ground, helping design suitable foundations, prevent problems and build safely.",
        "Permite identificar y valorar posibles impactos de actividades, obras o proyectos, establecer medidas preventivas y de mitigación para obtener los permisos ambientales.": "It identifies and assesses potential impacts of activities, construction works or projects and establishes preventive and mitigation measures to obtain environmental permits.",
        "Trabajos especializados en demolición y remoción de forma controlada y segura, facilitando excavaciones, construcción, ampliaciones y preparación de terrenos.": "Specialized demolition and removal work carried out in a controlled and safe manner, facilitating excavation, construction, expansion and site preparation.",
        "← Servicio anterior": "← Previous service",
        "Brindamos soluciones adaptadas a las necesidades de cada cliente.": "We provide solutions tailored to each client's needs.",
        "Estudios de Suelos": "Soil Studies",
        "Los estudios de suelo permiten conocer la capacidad de cargadel terreno y diseñar cimentaciones adecuadas, prevenir problemas y construir seguro.": "Soil studies reveal the bearing capacity of the ground, making it possible to design suitable foundations, prevent problems and build safely.",
        "Conocer más": "Learn more",
        "Perforación y Anclajes para estabilización de Taludes": "Drilling and Anchoring for Slope Stabilization",
        "Perforación y Anclajes para estabilización de Taludes y túneles": "Drilling and Anchoring for Slope and Tunnel Stabilization",
        "La perforación para anclajes permite instalar elementos de refuerzo en el terreno para estabilizar taludes, reducir el riesgo de deslizamientos y mejorar la seguridad de las obras.": "Anchor drilling makes it possible to install reinforcement elements in the ground to stabilize slopes, reduce the risk of landslides and improve job site safety.",
        "Evaluación Ambiental de Proyectos": "Environmental Assessment of Projects",
        "Permite identificar y valorar los posibles impactos de una obra o actividad, y establecer medidas para prevenir, mitigar y controlar sus efectos sobre el ambiente.": "It identifies and assesses the possible impacts of a project or activity and sets measures to prevent, mitigate and control their effects on the environment.",
        "Demoliciones de Roca y Concreto": "Rock and Concrete Demolition",
        "Demoliciones de roca y concreto: trabajos especializados para fragmentar y remover roca o estructuras de concreto de forma controlada y segura, facilitando excavaciones, construcción, ampliaciones y adecuación de terrenos.": "Rock and concrete demolition: specialized work to break up and remove rock or concrete structures in a controlled and safe way, supporting excavation, construction, expansions and site preparation.",
        "Siguiente servicio →": "Next service →",
        "SOBRE NOSOTROS": "ABOUT US",
        "Comprometidos con la": "Committed to the",
        "seguridad de cada proyecto.": "safety of every project.",
        "En GEOPRO creemos que el compromiso y la experiencia pueden combinarse para crear soluciones de alto valor.": "At GEOPRO we believe commitment and experience can come together to create high-value solutions.",
        "Ofrecemos un servicio profesional, confiable y adaptado a las necesidades de cada cliente.": "We offer a professional, reliable service tailored to each client's needs.",
        "REVISEMOS TU PROYECTO": "LET'S REVIEW YOUR PROJECT",
        "Pongámoslo en firme": "Let's set it on solid ground",
        "Estamos listos para ayudarte a desarrollar con seguridad tu próximo proyecto.": "We are ready to help you safely develop your next project.",
        "GEOPRO. Todos los derechos reservados.": "GEOPRO. All rights reserved.",
        "Medios de comunicación": "Contact channels",

        // Atributos
        "GEOPRO ofrece soluciones profesionales con seguridad e innovación.": "GEOPRO offers professional solutions with safety and innovation.",
        "GEOPRO, ir al inicio": "GEOPRO, go to home",
        "GEOPRO, volver al inicio": "GEOPRO, back to home",
        "Navegación principal": "Main navigation",
        "Abrir menú": "Open menu",
        "Galería de proyectos": "Project gallery",
        "Seleccionar imagen": "Select image",
        "Mostrar servicio anterior": "Show previous service",
        "Demolición de roca y concreto": "Rock and concrete demolition",
        "carrusel": "carousel",
        "Detalle de servicio de GEOPRO": "GEOPRO service details",
        "Análisis geotécnico de estabilidad": "Geotechnical stability analysis",
        "Esquema de anclajes pasivos para estabilización de taludes": "Diagram of passive anchors for slope stabilization",
        "Métodos de demolición": "Demolition methods",
        "Demolición de roca con rompedora de percusión": "Rock demolition with a percussion breaker",
        "Demolición con cuñas hidráulicas expansivas": "Demolition with expansive hydraulic wedges",
        "Demolición de roca con cemento expansivo": "Rock demolition with expansive cement",
        "Video de de GEOPRO": "GEOPRO video",
        "Fotografía de de GEOPRO": "GEOPRO photograph",
        "Hola, quisiera información sobre los servicios de GEOPRO.": "Hello, I would like information about GEOPRO's services.",
        "Hola, quisiera información sobre estudios de suelos.": "Hello, I would like information about soil studies.",
        "Hola, quisiera información sobre evaluación ambiental de proyectos.": "Hello, I would like information about environmental assessment of projects.",
        "Hola, quisiera información sobre perforación y anclajes para taludes.": "Hello, I would like information about drilling and anchoring for slopes.",
        "Hola, quisiera información sobre demoliciones de roca y concreto.": "Hello, I would like information about rock and concrete demolition.",
        "Personal inspeccionando una ladera rocosa protegida con malla": "Staff inspecting a rocky hillside protected with mesh",
        "Personal de GEOPRO realizando un ensayo de penetración en el suelo": "GEOPRO staff performing a soil penetration test",
        "Trabajo de estabilización en una ladera montañosa": "Stabilization work on a mountain slope",
        "Inspección geotécnica y ambiental en una ladera rocosa": "Geotechnical and environmental inspection on a rocky hillside",
        "Equipo de GEOPRO realizando trabajos de exploración geotécnica": "GEOPRO team carrying out geotechnical exploration",
        "Imagen ilustrativa de los servicios de GEOPRO": "Illustrative image of GEOPRO's services",
        "Mostrar siguiente servicio": "Show next service",
        "Datos de GEOPRO": "GEOPRO details",
        "Instagram GEOPRO": "GEOPRO Instagram",
        "Facebook GEOPRO": "GEOPRO Facebook",
        "WhatsApp, +506 8899 9998": "WhatsApp, +506 8899 9998",
        "Correo electrónico info@geoprocr.com": "Email info@geoprocr.com",
        "Navegación de la página": "Page navigation",

        // Estudios de suelos
        "La tasa de infiltración esta relacionada con la velocidad a la que el agua se filtra en el suelo. Se determina mediante ensayos de campo, como el método Porchet o el de doble anillo. Estos resultados permiten diseñar adecuadamente los sistemas de drenaje de aguas residuales, especialmente los asociados a tanques sépticos, ayudando a prevenir la contaminación de acuíferos y cuerpos de agua, así como problemas de malos olores, saturación del terreno o desbordamientos.": "The infiltration rate refers to the speed at which water seeps into the soil. It is determined through field tests, such as the Porchet method or the double-ring method. These results help design wastewater drainage systems, especially those associated with septic tanks, preventing contamination of aquifers and bodies of water, as well as odors, ground saturation and overflows.",
        "Análisis de estabilidad de taludes y tuneles": "Slope and tunnel stability analysis",
        "El análisis de estabilidad de taludes permite evaluar el riesgo a deslizamientos en terrenos inclinados mediante cálculos y modelos geotécnicos. Este estudio considera factores como la pendiente del terreno, la presencia de agua subterránea, el peso unitario del suelo, la cohesión y el ángulo de fricción interna cuando se trata de suelo, mientras que en taludes dominados por un macizo rocoso se aplican sistemas de clasificación geomecánica como el GSI (Índice de Resistencia Geológica) y el RMR (Índice de Calidad del Macizo Rocoso) Para obtener esta información se realizan levantamientos topográficos, ensayos de penetración, calicatas, análisis de laboratorio, ensayo martillo Smith, análisis de juntas e inspecciones visuales de campo. Con estos datos se calcula el factor de seguridad del talud, lo que permite determinar su estabilidad y recomendar medidas para prevenir deslizamientos y proteger las construcciones.": "Slope stability analysis assesses landslide risk on inclined ground using geotechnical calculations and models. For soil slopes, the study considers the slope, groundwater, soil unit weight, cohesion and internal friction angle. For slopes dominated by rock masses, geomechanical classification systems such as GSI (Geological Strength Index) and RMR (Rock Mass Rating) are used. Information is collected through topographic surveys, penetration tests, test pits, laboratory analysis, Smith hammer tests, joint analysis and visual field inspections. These data are used to calculate the slope's factor of safety, determine its stability and recommend measures to prevent landslides and protect structures.",
        "Cuando el suelo presenta baja capacidad portante, se pueden realizar trabajos de sustitución de materiales blandos por rellenos compactados de mejor calidad, así como redimensionar las cimentaciones convencionales. También diseñar y aplicar pilotes, micropilotes o losas flotantes que permiten transmitir o distribuir las cargas, reduciendo posibles asentamientos y daños estructurales. En terrenos inestables, se pueden conformar en terrazas, sistemas de drenaje subterráneo y superficial, muros de contención, anclajes y concreto lanzado, para reforzar y sostener el terreno a largo plazo. Además, se valoran posibles métodos de prevención de erosión y caída de rocas con distintos métodos como el MACMAT, hidrosiembra y otros. Estas soluciones se seleccionan según las características del terreno y las necesidades de cada proyecto, buscando construcciones más seguras y duraderas.": "When soil has a low bearing capacity, soft materials can be replaced with higher-quality compacted fill, and conventional foundations can be resized. Piles, micropiles or floating slabs can also be designed and installed to transfer or distribute loads, reducing potential settlement and structural damage. On unstable ground, terraces, subsurface and surface drainage, retaining walls, anchors and shotcrete can reinforce and support the terrain over the long term. Erosion and rockfall prevention methods, such as MACMAT and hydroseeding, are also considered. Solutions are selected according to ground conditions and project needs to support safer, more durable construction.",
        "SERVICIO GEOPRO": "GEOPRO SERVICE",
        "Conocer la capacidad de soporte, tasa de infiltración y estabilidad del terreno es fundamental para garantizar la seguridad y estabilidad de cualquier proyecto de construcción. Mediante un estudio de suelos es posible identificar las condiciones geotécnicas del terreno, evaluar su comportamiento ante las cargas de una estructura y obtener información técnica para diseñar cimentaciones adecuadas. Estos estudios permiten anticipar posibles problemas, reducir riesgos durante la construcción, optimizar recursos y tomar decisiones informadas que contribuyan a proteger la inversión y garantizar la seguridad de las obras a largo plazo.": "Knowing the bearing capacity, infiltration rate and stability of the ground is essential to ensure the safety and stability of any construction project. A soil study identifies the geotechnical conditions of the site, evaluates how it will behave under the loads of a structure and provides the technical information needed to design suitable foundations. These studies help anticipate potential problems, reduce risks during construction, optimize resources and make informed decisions that protect the investment and ensure the long-term safety of the works.",
        "Solicitar información": "Request information",
        "Parámetros y Etapas de exploración": "Parameters and Exploration Stages",
        "Capacidad de soporte": "Bearing capacity",
        "Es la capacidad de un terreno para soportar las cargas transmitidas por una estructura, que puede ser desde un tanque o una vivienda hasta un edificio o una represa. Esta capacidad se determina mediante ensayos geotécnicos, como el SPT (Standard Penetration Test) o el DPL (Dynamic Probing Light), complementados con análisis de muestras en laboratorio y el procesamiento de los datos obtenidos mediante software geotécnicos especializados. Posteriormente, los resultados se interpretan y evalúan conforme a la normativa costarricense vigente, incluyendo el Código Sísmico de Costa Rica y el Código de Cimentaciones de Costa Rica.": "It is the ability of the ground to support the loads transmitted by a structure, from a tank or a house to a building or a dam. This capacity is determined through geotechnical tests, such as the SPT (Standard Penetration Test) or the DPL (Dynamic Probing Light), complemented by laboratory analysis of samples and processing of the data with specialized geotechnical software. The results are then interpreted and evaluated in accordance with current Costa Rican regulations, including the Seismic Code of Costa Rica and the Foundation Code of Costa Rica.",
        "Tasa de infiltración": "Infiltration rate",
        "La tasa de infiltración esta relacionada con la velocidad ala que el agua se filtra en el suelo. Se determina mediante ensayos de campo, como el método Porchet o el de doble anillo. Estos resultados permiten diseñar adecuadamente los sistemas de drenaje de aguas residuales, especialmente los asociados a tanques sépticos, ayudando a prevenir la contaminación de acuíferos y cuerpos de agua, así como problemas de malos olores, saturación del terreno o desbordamientos.": "The infiltration rate is related to the speed at which water filters into the soil. It is determined through field tests, such as the Porchet method or the double-ring method. These results make it possible to properly design wastewater drainage systems, especially those associated with septic tanks, helping prevent contamination of aquifers and water bodies, as well as problems such as bad odors, ground saturation or overflows.",
        "Análisis de estabilidad de taludes y laderas": "Slope and hillside stability analysis",
        "El análisis de estabilidad de taludes permite evaluar el riesgo de deslizamientos en terrenos inclinados mediante cálculos y modelos geotécnicos especializados. Este estudio considera factores como la pendiente del terreno, la presencia de agua subterránea, el peso unitario del suelo, la cohesión y el ángulo de fricción interna. Para obtener esta información se realizan levantamientos topográficos, ensayos de penetración, calicatas, análisis de laboratorio e inspecciones visuales de campo. Con estos datos se calcula el factor de seguridad del talud, lo que permite determinar su estabilidad y recomendar medidas para prevenir deslizamientos y proteger las construcciones.": "Slope stability analysis assesses the risk of landslides on sloping ground using specialized geotechnical calculations and models. This study considers factors such as the slope of the terrain, the presence of groundwater, the unit weight of the soil, cohesion and the internal friction angle. To obtain this information, topographic surveys, penetration tests, test pits, laboratory analysis and visual field inspections are carried out. With this data the slope's factor of safety is calculated, which determines its stability and supports recommendations to prevent landslides and protect structures.",
        "Diseño y Soluciones Geotécnicas": "Geotechnical Design and Solutions",
        "Cuando el suelo presenta baja capacidad portante, se pueden realizar trabajos de sustitución de materiales blandos por rellenos de mejor calidad y compactación, así como redimensionar las cimentaciones convencionales. También diseñar y aplicar pilotes, micropilotes o losas flotantes que permiten transmitir o distribuir las cargas, reduciendo posibles asentamientos y daños estructurales. En terrenos inestables, se pueden conformar en terrazas, sistemas de drenaje subterráneo y superficial, muros de contención, anclajes y concreto lanzado, para reforzar y sostener el terreno a largo plazo. Además, se valoran posibles métodos de prevención de erosión y caída de rocas con distintos métodos como el MACMAT, hidrosiembra y otros. Estas soluciones se seleccionan según las características del terreno y las necesidades de cada proyecto, buscando construcciones más seguras y duraderas.": "When the soil has a low bearing capacity, soft materials can be replaced with higher-quality fill and compacted, and conventional foundations can be resized. Piles, micropiles or floating slabs can also be designed and installed to transfer or distribute loads, reducing potential settlement and structural damage. On unstable terrain, terracing, subsurface and surface drainage systems, retaining walls, anchors and shotcrete can be used to reinforce and support the ground over the long term. Methods to prevent erosion and rockfall may also be considered, including MACMAT, hydroseeding and other approaches. These solutions are selected according to the ground conditions and the needs of each project, with the aim of creating safer and more durable structures.",
        "Reconocimiento del sitio": "Site survey",
        "Exploración y ensayos de campo": "Field exploration and testing",
        "Ensayos y análisis del suelo": "Soil testing and analysis",
        "INFORME GEOTÉCNICO": "GEOTECHNICAL REPORT",
        "Informe y recomendaciones": "Report and recommendations",
        "PROCESO DEL ESTUDIO": "STUDY PROCESS",
        "Del terreno a las recomendaciones": "From the ground to the recommendations",
        "Sigue las etapas para ver cómo obtenemos y analizamos la información geotécnica.": "Follow the stages to see how we obtain and analyze the geotechnical information.",
        "Resultado:": "Result:",
        "Explorar el subsuelo": "Explore the subsurface",
        "Analizar resultados": "Analyze results",
        "Entregar recomendaciones": "Deliver recommendations",
        "Etapa anterior": "Previous stage",
        "Siguiente etapa": "Next stage",
        "Contáctanos para conversar sobre las necesidades de tu terreno y proyecto.": "Contact us to talk about the needs of your site and project.",
        "Contactar a GEOPRO": "Contact GEOPRO",
        "Conoce el servicio de estudios de suelos de GEOPRO y cómo ayuda a planificar cimentaciones seguras.": "Learn about GEOPRO's soil study service and how it helps plan safe foundations.",
        "Galería de estudios de suelos": "Soil studies gallery",
        "Ensayo de campo para evaluar la capacidad de soporte del suelo": "Field test to evaluate the bearing capacity of the soil",
        "Prueba de infiltración para medir la absorción de agua en el suelo": "Infiltration test to measure water absorption in the soil",
        "Diseño y soluciones para estabilizar taludes": "Design and solutions to stabilize slopes",
        "Soluciones de diseño geotécnico": "Geotechnical design solutions",
        "Ilustración de las etapas del estudio de suelos": "Illustration of the soil study stages",
        "Medición del terreno durante el reconocimiento del sitio": "Ground measurement during the site survey",
        "Personal realizando un ensayo de penetración estándar en el terreno": "Staff performing a standard penetration test on the ground",
        "Ensayo de infiltración de agua en el terreno": "Water infiltration test on the ground",
        "Informe geotécnico ilustrado con perfil de suelo y resultados de ensayos": "Geotechnical report illustrated with a soil profile and test results",
        "Etapas del procedimiento": "Procedure stages",
        "Navegación entre etapas": "Navigation between stages",
        "RECONOCIMIENTO": "SITE SURVEY",
        "EXPLORACIÓN DE CAMPO": "FIELD EXPLORATION",
        "ENSAYOS Y ANÁLISIS": "TESTING AND ANALYSIS",
        "INFORME TÉCNICO": "TECHNICAL REPORT",
        "Reconocer el sitio": "Survey the site",
        "Revisamos la ubicación, la topografía, las pendientes y las condiciones visibles. Con las características de la obra definimos dónde y cómo explorar.": "We review the location, topography, slopes and visible conditions. Based on the characteristics of the work we define where and how to explore.",
        "Un plan de exploración adaptado al terreno y al proyecto.": "An exploration plan adapted to the site and the project.",
        "Realizamos ensayos como SPT o DPL y, cuando se requiere, calicatas. Registramos la resistencia y profundidad de las capas y recuperamos muestras.": "We run tests such as SPT or DPL and, when required, test pits. We record the resistance and depth of the layers and recover samples.",
        "Registros de campo y muestras identificadas para su evaluación.": "Field records and identified samples for evaluation.",
        "Analizar el suelo": "Analyze the soil",
        "Según el alcance, caracterizamos muestras en laboratorio y procesamos los datos de campo. Para infiltración aplicamos pruebas como Porchet o doble anillo.": "Depending on the scope, we characterize samples in the laboratory and process the field data. For infiltration we apply tests such as Porchet or double ring.",
        "Parámetros geotécnicos para evaluar el comportamiento del terreno.": "Geotechnical parameters to evaluate the behavior of the ground.",
        "Integramos los resultados para evaluar capacidad de soporte, infiltración o estabilidad de taludes y definir criterios de cimentación, drenaje o estabilización según el proyecto.": "We integrate the results to evaluate bearing capacity, infiltration or slope stability and define foundation, drainage or stabilization criteria for the project.",
        "Un informe con criterios técnicos para tomar decisiones de diseño y construcción.": "A report with technical criteria for design and construction decisions.",

        // Anclajes
        "Perforación y Anclajes para estabilización.": "Drilling and Anchoring for Stabilization.",
        "Mediante perforaciones en el terreno, se instalan anclajes que ayudan a reforzar y mantener estables los taludes, evitando desprendimientos, reduciendo el riesgo de deslizamientos. Estos trabajos permiten mejorar la seguridad del terreno, proteger las construcciones cercanas y brindar mayor estabilidad a las obras a largo plazo.": "Anchors are installed through holes drilled in the ground to reinforce and stabilize slopes, prevent falling material and reduce landslide risk. This work improves ground safety, protects nearby structures and provides greater long-term stability.",
        "Los anclajes ayudan a reforzar y mantener firmes los terrenos inclinados o taludes, reduciendo el riesgo de movimientos de tierra y deslizamientos. Para su instalación, se toman en cuenta las características del terreno y las necesidades de cada proyecto, buscando mejorar la estabilidad del suelo, prevenir posibles daños y brindar mayor seguridad a las construcciones cercanas.": "Anchors reinforce and support sloping ground, reducing the risk of ground movement and landslides. Installation takes account of ground conditions and project needs to improve soil stability, prevent damage and make nearby structures safer.",
        "La ejecución se coordina con las condiciones del sitio y las demás actividades de construcción.": "Execution is coordinated with site conditions and other construction activities.",
        "Perforación y Anclajes": "Drilling and Anchoring",
        "Perforación y Anclajes para Taludes": "Drilling and Anchoring for Slopes",
        "Mediante perforaciones en el terreno, se instalan anclajes que ayudan a reforzar y mantener estables los taludes, evitando desprendimientos de tierra y reduciendo el riesgo de deslizamientos. Estos trabajos permiten mejorar la seguridad del terreno, proteger las construcciones cercanas y brindar mayor estabilidad a las obras a largo plazo.": "By drilling into the ground, anchors are installed that help reinforce and keep slopes stable, preventing soil detachment and reducing the risk of landslides. This work improves the safety of the ground, protects nearby structures and gives the works greater long-term stability.",
        "ESTABILIZACIÓN DE TALUDES": "SLOPE STABILIZATION",
        "Refuerzo del terreno para las necesidades de cada obra": "Ground reinforcement for the needs of each project",
        "Los anclajes ayudan a reforzar y mantener firmes los terrenos inclinados o taludes, reduciendo el riesgo de movimientos de tierra y deslizamientos. Para su instalación, se toman en cuenta las características del terreno y las necesidades de cada proyecto, buscando mejorar la estabilidad del suelo, prevenir posibles daños y brindar mayor seguridad a las construcciones cercanas..": "Anchors help reinforce and keep sloping ground or slopes firm, reducing the risk of earth movement and landslides. For their installation, the characteristics of the ground and the needs of each project are taken into account, aiming to improve soil stability, prevent possible damage and give nearby structures greater safety.",
        "Condiciones del sitio": "Site conditions",
        "Antes de iniciar los trabajos, se estudia la inclinación, altura y forma del talud, así como las características y resistencia del terreno. Esto permite planificar las perforaciones y la instalación de anclajes de manera adecuada, buscando reducir el riesgo de deslizamientos y garantizar una mayor estabilidad y seguridad en la zona.": "Before work begins, the inclination, height and shape of the slope are studied, along with the characteristics and strength of the ground. This allows the drilling and anchor installation to be planned properly, aiming to reduce the risk of landslides and ensure greater stability and safety in the area.",
        "Se realizan perforaciones en el terreno para instalar anclajes que ayudan a reforzar y mantener estables los taludes. Estos trabajos se llevan a cabo según las características del terreno y las necesidades de cada proyecto, con el objetivo de reducir el riesgo de deslizamientos y brindar mayor seguridad a las obras.": "Holes are drilled into the ground to install anchors that help reinforce and keep slopes stable. This work is carried out according to the characteristics of the ground and the needs of each project, with the goal of reducing the risk of landslides and giving the works greater safety.",
        "Estabilidad y seguridad": "Stability and safety",
        "La instalación de anclajes ayuda a reforzar y mantener firmes los terrenos inclinados, disminuyendo el riesgo de deslizamientos y desprendimientos de tierra. Esto permite mejorar la estabilidad del terreno, proteger las construcciones cercanas y brindar mayor seguridad a las personas y al proyecto.": "Installing anchors helps reinforce and keep sloping ground firm, lowering the risk of landslides and soil detachment. This improves the stability of the ground, protects nearby structures and gives people and the project greater safety.",
        "ANCLAJE": "ANCHOR",
        "PERFORANDO": "DRILLING",
        "INSTALANDO": "INSTALLING",
        "TENSANDO": "TENSIONING",
        "PUNTO DE INICIO": "STARTING POINT",
        "PERFORACIÓN": "DRILLING",
        "COLOCACIÓN Y LECHADA": "PLACEMENT AND GROUTING",
        "TENSADO Y FIJACIÓN": "TENSIONING AND ANCHORING",
        "Cómo trabaja el refuerzo": "How the reinforcement works",
        "Una vista sencilla para explorar cómo se organiza una intervención de perforación y anclajes.": "A simple view to explore how a drilling and anchoring intervention is organized.",
        "Mueve el puntero para orientar el esquema y toca o pulsa para avanzar por perforación, colocación y tensado.": "Move the pointer to orient the diagram and tap or click to move through drilling, placement and tensioning.",
        "Leer la geometría del talud": "Read the slope geometry",
        "Se revisan la forma del terreno y las condiciones del sitio antes de definir el trabajo.": "The shape of the ground and the site conditions are reviewed before defining the work.",
        "Definir el refuerzo": "Define the reinforcement",
        "La ubicación y las características de los anclajes se establecen de acuerdo con el proyecto.": "The location and characteristics of the anchors are set according to the project.",
        "Integrar la solución a la obra": "Integrate the solution into the work",
        "La ejecución se coordina con las necesidades del sitio y las demás actividades de construcción.": "Execution is coordinated with the needs of the site and the other construction activities.",
        "¿Necesitas estabilizar un talud?": "Do you need to stabilize a slope?",
        "Contáctanos para conversar sobre las condiciones de tu proyecto.": "Contact us to talk about the conditions of your project.",
        "Conoce el servicio de perforación y anclajes para estabilización de taludes de GEOPRO.": "Learn about GEOPRO's drilling and anchoring service for slope stabilization.",
        "Galería de perforación y anclajes": "Drilling and anchoring gallery",
        "Inspección de las condiciones del terreno antes de instalar anclajes": "Inspection of ground conditions before installing anchors",
        "Perforación e instalación de anclajes en un talud": "Drilling and anchor installation on a slope",
        "Talud reforzado para mejorar la estabilidad y seguridad del terreno": "Reinforced slope to improve ground stability and safety",
        "Simulación interactiva de instalación de anclaje. Pulsa para avanzar por las etapas de perforación, colocación y tensado.": "Interactive anchor installation simulation. Click to move through the drilling, placement and tensioning stages.",

        // Evaluación ambiental
        "Viabilidad Licencia Ambiental": "Environmental Feasibility License",
        "Presentación de documentos, asesoría y representación técnica y legal en reuniones con las instituciones reguladoras del medio ambiente, así como las inspecciones de seguimiento en campo.": "Submission of documents, advice, and technical and legal representation in meetings with environmental regulators, as well as follow-up field inspections.",
        "Evaluación Ambiental": "Environmental Assessment",
        "Brindamos asesoría en evaluación y gestión ambiental de proyectos, realizamos la formulación y trámite para la obtención de permisos ambientales ante SETENA, SINAC, DGM y otros, y asesoramos en el cumplimiento de la normativa vigente.": "We provide consulting on environmental assessment and project management, prepare and process applications for environmental permits from SETENA, SINAC, DGM and other authorities, and advise on compliance with current regulations.",
        "Realizamos los estudios técnicos tales como geología, biología, socioeconómico-cultural, arqueológico, geotécnico, hidrológico, topográfico y forestal, para la integración, análisis y evaluación de impacto ambiental, planes de gestión ambiental y seguimiento – monitoreo de compromisos ambientales.": "We conduct technical studies in geology, biology, socio-economic and cultural studies, archaeology, geotechnics, hydrology, topography and forestry to integrate, analyze and assess environmental impacts, prepare environmental management plans, and follow up on and monitor environmental commitments.",
        "Nuestro objetivo es facilitar el desarrollo de proyectos de manera responsable y amigable con el medio ambiente, de manera técnica y jurídicamente segura, conforme a la legislación ambiental y normativas paralelas en Costa Rica.": "Our goal is to support project development in a responsible and environmentally friendly way, with technical and legal certainty, in accordance with Costa Rican environmental legislation and related regulations.",
        "PLANIFICACIÓN AMBIENTAL": "ENVIRONMENTAL PLANNING",
        "Identificar impactos y planificar medidas": "Identify impacts and plan measures",
        "La evaluación ambiental considera las características de la actividad y su entorno para valorar posibles efectos y orientar medidas de manejo apropiadas para su proyecto y el medio ambiente.": "The environmental assessment considers the characteristics of the activity and its surroundings to assess possible effects and guide management measures suited to your project and the environment.",
        "Identificación de impactos": "Impact identification",
        "Se reconocen los posibles efectos de la obra o actividad sobre los componentes del entorno.": "The possible effects of the work or activity on the components of the environment are recognized.",
        "Medidas de manejo": "Management measures",
        "Se plantean medidas para prevenir, mitigar o controlar los impactos identificados.": "Measures are proposed to prevent, mitigate or control the identified impacts.",
        "Viabilidad de licencias ambientales": "Environmental permit feasibility",
        "Presentación de documentos, asesoría y representación técnica y legal en reuniones con las instituciones reguladoras del medio ambiente, así como inspecciones de seguimiento en campo.": "Document submission, consulting, and technical and legal representation at meetings with environmental regulatory institutions, as well as follow-up field inspections.",
        "Regencia de gestión ambiental": "Environmental management oversight",
        "Acompañamos el proyecto con visitas de seguimiento, verificación de las medidas ambientales y elaboración de informes, de acuerdo con los compromisos establecidos y la normativa aplicable.": "We support the project through follow-up visits, verification of environmental measures and preparation of reports, in accordance with established commitments and applicable regulations.",
        "Seguimiento de medidas ambientales durante los trabajos de campo": "Monitoring environmental measures during field work",
        "PROYECTO": "PROJECT",
        "AGUA": "WATER",
        "SUELO": "SOIL",
        "FLORA": "FLORA",
        "ENTORNO": "SURROUNDINGS",
        "MAPA DEL ENTORNO": "SURROUNDINGS MAP",
        "Un proyecto conectado con su entorno": "A project connected to its surroundings",
        "Explora algunos aspectos que pueden considerarse al valorar los posibles efectos de una obra.": "Explore some aspects that can be considered when assessing the possible effects of a project.",
        "Observar el contexto": "Observe the context",
        "Se identifican características del área y elementos del entorno relacionados con la actividad.": "Characteristics of the area and elements of the surroundings related to the activity are identified.",
        "Valorar posibles efectos": "Assess possible effects",
        "Se analizan los impactos potenciales para reconocer los aspectos que requieren atención.": "Potential impacts are analyzed to recognize the aspects that need attention.",
        "Planificar medidas": "Plan measures",
        "La evaluación ayuda a orientar acciones para prevenir, mitigar o controlar efectos negativos, así como potenciar los efectos positivos.": "The assessment helps guide actions to prevent, mitigate or control negative effects, as well as enhance positive effects.",
        "¡Revisemos tu proyecto!": "Let's review your project!",
        "Contáctanos para conversar sobre las consideraciones ambientales de tu obra.": "Contact us to talk about the environmental considerations of your project.",
        "Conoce el servicio de evaluación ambiental de proyectos de GEOPRO.": "Learn about GEOPRO's environmental assessment service for projects.",
        "Galería de evaluación ambiental": "Environmental assessment gallery",
        "Entorno natural considerado durante la identificación de impactos ambientales": "Natural environment considered during environmental impact identification",
        "Trabajo de gestión ambiental para orientar medidas de manejo": "Environmental management work to guide management measures",
        "Consideraciones ambientales integradas en la planificación del proyecto": "Environmental considerations integrated into project planning",
        "Logotipo de SETENA": "SETENA logo",

        // Demoliciones
        "Especialistas en demoliciones controladas, únicos en Costa Rica con tecnología de cuñas hidráulicas expansivas que reúne las virtudes de cada método, es tan segura y controlada como el cemento expansivo y tan eficaz e inmediata como el explosivo deflagrante. Esto permiten facilitar excavaciones, preparar terrenos para nuevas construcciones, ampliar espacios y remover materiales difíciles, utilizando técnicas y equipos adecuados para cada proyecto, con el objetivo de realizar los trabajos de forma eficiente y reducir los riesgos en la zona.": "We specialize in controlled demolition and are the only company in Costa Rica using expansive hydraulic wedge technology that combines the advantages of different methods: it is as safe and controlled as expansive cement and as effective and immediate as a deflagrating explosive. This work facilitates excavation, prepares sites for new construction, expands spaces and removes difficult materials using techniques and equipment suited to each project, with the aim of working efficiently and reducing risks in the area.",
        "Un producto con reacción entre 12 y 36 h según condiciones de temperatura, es una demolición controlada y segura, el resultado es verificable después de 36 horas, por lo tanto, si quedan bloques grandes, se debe regresar al sitio y repetir el ciclo. La granulometría generalmente queda para ser movida a mano, siempre es probable tener que desacoplar con palanca.": "The product reacts within 12 to 36 hours, depending on temperature, providing controlled and safe demolition. The result can be checked after 36 hours; if large blocks remain, the team must return and repeat the cycle. The fragments are generally small enough to move by hand, although a pry bar may be needed to separate them.",
        "Demoliciones": "Demolition",
        "Realizamos trabajos especializados para romper y retirar roca o estructuras de concreto de manera controlada y segura. Estos servicios permiten facilitar excavaciones, preparar terrenos para nuevas construcciones, ampliar espacios y remover materiales difíciles, utilizando técnicas y equipos adecuados para cada proyecto, con el objetivo de realizar los trabajos de forma eficiente y reducir los riesgos en la zona.": "We carry out specialized work to break up and remove rock or concrete structures in a controlled and safe way. These services facilitate excavation, prepare land for new construction, expand spaces and remove difficult materials, using techniques and equipment suited to each project, with the goal of working efficiently and reducing risks in the area.",
        "TRABAJO CONTROLADO Y SEGURO": "CONTROLLED AND SAFE WORK",
        "Preparación y ejecución según las condiciones del sitio": "Preparation and execution according to site conditions",
        "Antes de realizar trabajos de demolición de roca o concreto, es importante conocer las características del material, las condiciones del lugar y las necesidades del proyecto. Una buena planificación permite elegir los equipos y métodos más adecuados para romper y retirar el material de forma controlada, reducir riesgos, proteger las áreas cercanas y facilitar el avance de la construcción de manera segura y eficiente.": "Before carrying out rock or concrete demolition, it is important to know the characteristics of the material, the conditions of the site and the needs of the project. Good planning makes it possible to choose the most suitable equipment and methods to break and remove the material in a controlled way, reduce risks, protect nearby areas and move construction forward safely and efficiently.",
        "Rompedora percusión": "Percussion breaker",
        "Ideal para demolición de losas de concreto o rocas deleznables, es un método controlado y seguro, que permite además, una granulometría final manipulable con las manos.": "Ideal for demolishing concrete slabs or friable rock, it is a controlled and safe method that also produces a final grain size that can be handled by hand.",
        "Cuñas hidráulicas expansivas": "Expansive hydraulic wedges",
        "Se puede utilizar prácticamente en cualquier terreno, la expansión es milimétrica y lenta, lo cual resulta en una demolición controlada, el resultado es inmediato, al salir del sitio el trabajo queda terminado. La granulometría puede ser gruesa y ocasionalmente será necesario una máquina para removerla.": "It can be used in practically any terrain. The expansion is millimetric and slow, resulting in a controlled demolition. The result is immediate: when leaving the site, the work is finished. The grain size can be coarse and a machine will occasionally be needed to remove it.",
        "Cemento expansivo": "Expansive cement",
        "Un producto con reacción entre 12 y 36 h según condiciones de temperatura, es una demolición controlada y segura, el resultado es verificable hasta después de 36 horas, por lo tanto, si quedan bloques grandes, se debe regresar al sitio y repetir el ciclo. La granulometría generalmente queda para ser movida a mano, siempre es probable tener que desacoplar con palanca.": "A product that reacts within 12 to 36 hours depending on temperature conditions. It is a controlled and safe demolition; the result can only be verified after 36 hours, so if large blocks remain, the crew must return to the site and repeat the cycle. The grain size is usually small enough to be moved by hand, though it is likely that pieces will need to be loosened with a pry bar.",
        "TOCA LA ROCA PARA SIMULAR SU FRACTURA": "TOUCH THE ROCK TO SIMULATE ITS FRACTURE",
        "Preparar el área con control": "Prepare the area with control",
        "Una secuencia visual para mostrar cómo se puede organizar la remoción de roca o concreto.": "A visual sequence showing how the removal of rock or concrete can be organized.",
        "Toca o pulsa la roca para observar una simulación visual de sus fracturas y fragmentos.": "Touch or click the rock to see a visual simulation of its fractures and fragments.",
        "Delimitar el trabajo": "Define the work area",
        "Se consideran el material, el espacio disponible y las condiciones alrededor del área de intervención.": "The material, the available space and the conditions around the work area are considered.",
        "Fragmentar de forma planificada": "Fragment in a planned way",
        "La ejecución se organiza de acuerdo con el tipo de material y el objetivo de la obra.": "Execution is organized according to the type of material and the goal of the work.",
        "Retirar y despejar": "Remove and clear",
        "La remoción prepara el espacio para continuar con excavaciones u otras actividades del proyecto.": "Removal prepares the space to continue with excavation or other project activities.",
        "¿Necesitas preparar el terreno?": "Do you need to prepare the ground?",
        "Contáctanos para conversar sobre el trabajo que requiere tu proyecto.": "Contact us to talk about the work your project requires.",
        "Conoce el servicio de demolición controlada de roca y concreto de GEOPRO.": "Learn about GEOPRO's controlled rock and concrete demolition service.",
        "Galería de demoliciones de roca y concreto": "Rock and concrete demolition gallery",
        "Material rocoso durante trabajos de demolición controlada": "Rock material during controlled demolition work",
        "Sitio de construcción y terreno donde se planifica el trabajo": "Construction site and ground where the work is planned",
        "Personal trabajando en una excavación para preparar el avance de obra": "Staff working in an excavation to prepare for project progress",
        "Roca interactiva con superficie irregular. Toca o pulsa para observar una simulación gráfica de fractura y fragmentación.": "Interactive rock with an irregular surface. Touch or click to see a graphic simulation of fracture and fragmentation."
    };

    var EN_LOWER = {};
    Object.keys(EN).forEach(function (key) {
        EN_LOWER[key.toLowerCase()] = EN[key];
    });

    var PATTERNS = [
        [/^ETAPA\b/, "STAGE"],
        [/^Imagen (\d+)$/, "Image $1"],
        [/^Fotografía de (.+)$/, "Photograph of $1"],
        [/^(\d+) de (\d+)$/, "$1 of $2"]
    ];

    var SEPARATORS = [" · ", " | "];

    var textOriginals = new WeakMap();
    var attrOriginals = new WeakMap();
    var ATTRS = ["alt", "aria-label", "aria-roledescription", "aria-valuetext", "placeholder", "title"];
    var currentLang = "es";
    var observer = null;

    function normalize(value) {
        return value.replace(/[\u00ad\u200b]/g, "").replace(/\s+/g, " ").trim();
    }

    function translateString(value) {
        var key = normalize(value);
        if (!key) return null;
        if (Object.prototype.hasOwnProperty.call(EN, key)) return EN[key];
        var lower = key.toLowerCase();
        if (Object.prototype.hasOwnProperty.call(EN_LOWER, lower)) {
            var value = EN_LOWER[lower];
            return key === key.toUpperCase() ? value.toUpperCase() : value;
        }
        for (var s = 0; s < SEPARATORS.length; s++) {
            var separator = SEPARATORS[s];
            if (key.indexOf(separator) !== -1) {
                var parts = key.split(separator);
                var changed = false;
                var mapped = parts.map(function (part) {
                    var result = translateString(part);
                    if (result === null) return part;
                    changed = true;
                    return result;
                });
                return changed ? mapped.join(separator) : null;
            }
        }

        for (var i = 0; i < PATTERNS.length; i++) {
            if (PATTERNS[i][0].test(key)) return key.replace(PATTERNS[i][0], PATTERNS[i][1]);
        }
        return null;
    }

    function convertText(original) {
        var translated = translateString(original);
        if (translated === null) return original;
        var lead = original.match(/^\s*/)[0];
        var trail = original.match(/\s*$/)[0];
        return lead + translated + trail;
    }

    function isIgnored(node) {
        var element = node.nodeType === 1 ? node : node.parentElement;
        return !element || !!element.closest("script, style, noscript, [data-no-i18n]");
    }

    function applyTextNode(node) {
        if (isIgnored(node)) return;
        if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
        var original = textOriginals.get(node);
        var next = currentLang === "en" ? convertText(original) : original;
        if (node.nodeValue !== next) node.nodeValue = next;
    }

    function applyElementAttrs(element) {
        if (isIgnored(element)) return;
        var saved = attrOriginals.get(element);
        if (!saved) {
            saved = {};
            attrOriginals.set(element, saved);
        }
        ATTRS.forEach(function (name) {
            if (!element.hasAttribute(name)) return;
            if (!(name in saved)) saved[name] = element.getAttribute(name);
            var next = currentLang === "en" ? convertText(saved[name]) : saved[name];
            if (element.getAttribute(name) !== next) element.setAttribute(name, next);
        });
        if (element.tagName === "A" && element.hasAttribute("href")) {
            if (!("href" in saved)) saved.href = element.getAttribute("href");
            var href = saved.href;
            if (currentLang === "en" && /^https:\/\/wa\.me\//i.test(href)) {
                var url = new URL(href);
                var message = url.searchParams.get("text");
                if (message) {
                    url.searchParams.set("text", convertText(message));
                    href = url.href;
                }
            }
            if (element.getAttribute("href") !== href) element.setAttribute("href", href);
        }
    }

    function applyTree(root) {
        if (root.nodeType === 3) {
            applyTextNode(root);
            return;
        }
        if (root.nodeType !== 1 && root.nodeType !== 9) return;

        if (root.nodeType === 1) applyElementAttrs(root);
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        var node = walker.nextNode();
        while (node) {
            if (node.nodeType === 3) applyTextNode(node);
            else applyElementAttrs(node);
            node = walker.nextNode();
        }
    }

    function applyHead() {
        var meta = document.querySelector('meta[name="description"]');
        if (meta) {
            if (!meta.__es) meta.__es = meta.getAttribute("content");
            meta.setAttribute("content", currentLang === "en" ? convertText(meta.__es) : meta.__es);
        }
        if (!document.__esTitle) document.__esTitle = document.title;
        document.title = currentLang === "en" ? convertText(document.__esTitle) : document.__esTitle;
    }

    function observe() {
        if (!observer) return;
        observer.observe(document.body, { childList: true, characterData: true, attributes: true, attributeFilter: ATTRS.concat("href"), subtree: true });
    }

    function applyLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        if (observer) observer.disconnect();
        applyTree(document.body);
        applyHead();
        updateToggle();
        observe();
    }

    function handleMutations(mutations) {
        observer.disconnect();
        mutations.forEach(function (mutation) {
            if (mutation.type === "attributes") {
                var saved = attrOriginals.get(mutation.target);
                if (saved) delete saved[mutation.attributeName];
                applyElementAttrs(mutation.target);
                return;
            }
            if (mutation.type === "characterData") {
                textOriginals.set(mutation.target, mutation.target.nodeValue);
                applyTextNode(mutation.target);
                return;
            }
            mutation.addedNodes.forEach(function (node) {
                applyTree(node);
            });
        });
        observe();
    }

    function saveLanguage(lang) {
        try {
            window.localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            /* sin almacenamiento disponible */
        }
    }

    function readLanguage() {
        try {
            var stored = window.localStorage.getItem(STORAGE_KEY);
            return stored === "en" || stored === "es" ? stored : null;
        } catch (error) {
            return null;
        }
    }

    var switcher = null;

    function updateToggle() {
        if (!switcher) return;
        switcher.setAttribute("aria-label", currentLang === "en" ? EN["Idioma"] : "Idioma");
        Array.prototype.forEach.call(switcher.querySelectorAll("[data-lang]"), function (button) {
            button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === currentLang));
            var name = button.getAttribute("data-lang") === "es" ? "Español" : "Inglés";
            button.setAttribute("title", currentLang === "en" ? EN[name] : name);
        });
    }

    function injectStyles() {
        var style = document.createElement("style");
        style.setAttribute("data-no-i18n", "");
        style.textContent = [
            ".lang-switch{display:inline-flex;flex:none;align-items:center;gap:2px;margin-left:-14px}",
            ".lang-switch button{min-width:40px;padding:7px 11px;border:1px solid rgb(233 192 27 / 60%);border-radius:6px;background:transparent;color:#e9c01b;font:700 13px 'Montserrat',Arial,sans-serif;letter-spacing:.5px;cursor:pointer;transition:background .2s,color .2s}",
            ".lang-switch button:hover,.lang-switch button:focus-visible{background:rgb(233 192 27 / 22%);outline:none}",
            ".lang-switch button[aria-pressed='true']{background:#e9c01b;color:#071018}",
            "@media (max-width:900px){.nav.active .lang-switch{margin-left:0;justify-content:flex-start}}"
        ].join("");
        document.head.appendChild(style);
    }

    function buildSwitcher() {
        var header = document.querySelector("header");
        if (!header) return;

        switcher = document.createElement("div");
        switcher.className = "lang-switch";
        switcher.setAttribute("role", "group");
        switcher.setAttribute("aria-label", "Idioma");
        switcher.setAttribute("data-no-i18n", "");
        switcher.innerHTML =
            '<button type="button" data-lang="es" lang="es" title="Español">ES</button>' +
            '<button type="button" data-lang="en" lang="en" title="Inglés">EN</button>';

        switcher.addEventListener("click", function (event) {
            var button = event.target.closest("[data-lang]");
            if (!button) return;
            var lang = button.getAttribute("data-lang");
            saveLanguage(lang);
            applyLanguage(lang);
        });

        var nav = header.querySelector("nav");
        if (nav) nav.appendChild(switcher);
        else header.appendChild(switcher);
    }

    function init() {
        injectStyles();
        buildSwitcher();
        observer = new MutationObserver(handleMutations);
        applyLanguage(readLanguage() || "es");
        window.addEventListener("storage", function (event) {
            if (event.key === STORAGE_KEY && (event.newValue === "en" || event.newValue === "es")) {
                applyLanguage(event.newValue);
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
