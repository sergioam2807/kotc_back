import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Archivo generado con las 16 regiones y 346 comunas de Chile
export const regionesYComunas = [
  {
    name: 'Región de Arica y Parinacota',
    latitude: -18.4782534,
    longitude: -70.3125998,
    comunas: [
      { name: 'Arica', latitude: -18.4782534, longitude: -70.3125998 },
      { name: 'Camarones', latitude: -19.0147, longitude: -69.8697 },
      { name: 'Putre', latitude: -18.1964, longitude: -69.5597 },
      { name: 'General Lagos', latitude: -17.8853, longitude: -69.4447 }
    ]
  },
  {
    name: 'Región de Tarapacá',
    latitude: -20.2132996,
    longitude: -70.1527665,
    comunas: [
      { name: 'Iquique', latitude: -20.2133, longitude: -70.1528 },
      { name: 'Alto Hospicio', latitude: -20.2686, longitude: -70.1047 },
      { name: 'Pozo Almonte', latitude: -20.2597, longitude: -69.7861 },
      { name: 'Camiña', latitude: -19.3122, longitude: -69.4256 },
      { name: 'Colchane', latitude: -19.2772, longitude: -68.6383 },
      { name: 'Huara', latitude: -19.9958, longitude: -69.7697 },
      { name: 'Pica', latitude: -20.4892, longitude: -69.3317 }
    ]
  },
  {
    name: 'Región de Antofagasta',
    latitude: -23.6509,
    longitude: -70.3975,
    comunas: [
      { name: 'Antofagasta', latitude: -23.6509, longitude: -70.3975 },
      { name: 'Mejillones', latitude: -23.1036, longitude: -70.4522 },
      { name: 'Sierra Gorda', latitude: -22.8917, longitude: -69.3247 },
      { name: 'Taltal', latitude: -25.4078, longitude: -70.4831 },
      { name: 'Calama', latitude: -22.4544, longitude: -68.9272 },
      { name: 'Ollagüe', latitude: -21.2222, longitude: -68.2528 },
      { name: 'San Pedro de Atacama', latitude: -22.9111, longitude: -68.1992 },
      { name: 'Tocopilla', latitude: -22.0881, longitude: -70.1978 },
      { name: 'María Elena', latitude: -22.3431, longitude: -69.6644 }
    ]
  },
  {
    name: 'Región de Atacama',
    latitude: -27.3667,
    longitude: -70.3333,
    comunas: [
      { name: 'Copiapó', latitude: -27.3667, longitude: -70.3333 },
      { name: 'Caldera', latitude: -27.0672, longitude: -70.8192 },
      { name: 'Tierra Amarilla', latitude: -27.4811, longitude: -70.2656 },
      { name: 'Chañaral', latitude: -26.3478, longitude: -70.6222 },
      { name: 'Diego de Almagro', latitude: -26.3917, longitude: -70.0464 },
      { name: 'Vallenar', latitude: -28.5756, longitude: -70.7583 },
      { name: 'Alto del Carmen', latitude: -28.7589, longitude: -70.4856 },
      { name: 'Freirina', latitude: -28.5072, longitude: -71.0778 },
      { name: 'Huasco', latitude: -28.4681, longitude: -71.2192 }
    ]
  },
  {
    name: 'Región de Coquimbo',
    latitude: -29.9533,
    longitude: -71.3395,
    comunas: [
      { name: 'La Serena', latitude: -29.9027, longitude: -71.252 },
      { name: 'Coquimbo', latitude: -29.9533, longitude: -71.3395 },
      { name: 'Andacollo', latitude: -30.2286, longitude: -71.0853 },
      { name: 'La Higuera', latitude: -29.5108, longitude: -71.1972 },
      { name: 'Paiguano', latitude: -30.0192, longitude: -70.5236 },
      { name: 'Vicuña', latitude: -30.0319, longitude: -70.7125 },
      { name: 'Illapel', latitude: -31.6333, longitude: -71.1667 },
      { name: 'Canela', latitude: -31.3972, longitude: -71.4589 },
      { name: 'Los Vilos', latitude: -31.9125, longitude: -71.5147 },
      { name: 'Salamanca', latitude: -31.7794, longitude: -70.9639 },
      { name: 'Ovalle', latitude: -30.6011, longitude: -71.1994 },
      { name: 'Combarbalá', latitude: -31.1764, longitude: -71.0022 },
      { name: 'Monte Patria', latitude: -30.6936, longitude: -70.9575 },
      { name: 'Punitaqui', latitude: -30.8286, longitude: -71.2589 },
      { name: 'Río Hurtado', latitude: -30.2789, longitude: -70.6722 }
    ]
  },
  {
    name: 'Región de Valparaíso',
    latitude: -33.0472,
    longitude: -71.6127,
    comunas: [
      { name: 'Valparaíso', latitude: -33.0472, longitude: -71.6127 },
      { name: 'Casablanca', latitude: -33.3156, longitude: -71.4072 },
      { name: 'Concón', latitude: -32.9239, longitude: -71.5175 },
      { name: 'Juan Fernández', latitude: -33.6361, longitude: -78.8356 },
      { name: 'Puchuncaví', latitude: -32.7208, longitude: -71.4111 },
      { name: 'Quintero', latitude: -32.7797, longitude: -71.5283 },
      { name: 'Viña del Mar', latitude: -33.0245, longitude: -71.5518 },
      { name: 'Isla de Pascua', latitude: -27.1127, longitude: -109.3497 },
      { name: 'Los Andes', latitude: -32.8337, longitude: -70.5983 },
      { name: 'Calle Larga', latitude: -32.8631, longitude: -70.6194 },
      { name: 'Rinconada', latitude: -32.8469, longitude: -70.7028 },
      { name: 'San Esteban', latitude: -32.8028, longitude: -70.5806 },
      { name: 'La Ligua', latitude: -32.4489, longitude: -71.2311 },
      { name: 'Cabildo', latitude: -32.4272, longitude: -71.0664 },
      { name: 'Papudo', latitude: -32.5083, longitude: -71.4508 },
      { name: 'Petorca', latitude: -32.2536, longitude: -70.9322 },
      { name: 'Zapallar', latitude: -32.5514, longitude: -71.4647 },
      { name: 'Quillota', latitude: -32.8803, longitude: -71.2464 },
      { name: 'Calera', latitude: -32.7844, longitude: -71.2017 },
      { name: 'Hijuelas', latitude: -32.8, longitude: -71.1436 },
      { name: 'La Cruz', latitude: -32.825, longitude: -71.2289 },
      { name: 'Nogales', latitude: -32.7356, longitude: -71.2058 },
      { name: 'San Antonio', latitude: -33.595, longitude: -71.6144 },
      { name: 'Algarrobo', latitude: -33.3703, longitude: -71.6744 },
      { name: 'Cartagena', latitude: -33.5456, longitude: -71.6033 },
      { name: 'El Quisco', latitude: -33.3914, longitude: -71.6958 },
      { name: 'El Tabo', latitude: -33.455, longitude: -71.6669 },
      { name: 'Santo Domingo', latitude: -33.6364, longitude: -71.6247 },
      { name: 'San Felipe', latitude: -32.7508, longitude: -70.7253 },
      { name: 'Catemu', latitude: -32.7783, longitude: -70.9622 },
      { name: 'Llaillay', latitude: -32.8417, longitude: -70.9525 },
      { name: 'Panquehue', latitude: -32.7664, longitude: -70.8356 },
      { name: 'Putaendo', latitude: -32.6264, longitude: -70.7167 },
      { name: 'Santa María', latitude: -32.7483, longitude: -70.6558 },
      { name: 'Quilpué', latitude: -33.0483, longitude: -71.4428 },
      { name: 'Limache', latitude: -33.0153, longitude: -71.2725 },
      { name: 'Olmué', latitude: -33.0044, longitude: -71.1878 },
      { name: 'Villa Alemana', latitude: -33.0436, longitude: -71.3739 }
    ]
  },
  {
    name: 'Región Metropolitana de Santiago',
    latitude: -33.4489,
    longitude: -70.6693,
    comunas: [
      { name: 'Santiago', latitude: -33.4489, longitude: -70.6693 },
      { name: 'Cerrillos', latitude: -33.4983, longitude: -70.7175 },
      { name: 'Cerro Navia', latitude: -33.4217, longitude: -70.7383 },
      { name: 'Conchalí', latitude: -33.3853, longitude: -70.6756 },
      { name: 'El Bosque', latitude: -33.5594, longitude: -70.6758 },
      { name: 'Estación Central', latitude: -33.4619, longitude: -70.6975 },
      { name: 'Huechuraba', latitude: -33.3761, longitude: -70.6481 },
      { name: 'Independencia', latitude: -33.4161, longitude: -70.6653 },
      { name: 'La Cisterna', latitude: -33.5261, longitude: -70.6644 },
      { name: 'La Florida', latitude: -33.5228, longitude: -70.5986 },
      { name: 'La Granja', latitude: -33.5358, longitude: -70.6206 },
      { name: 'La Pintana', latitude: -33.5856, longitude: -70.6308 },
      { name: 'La Reina', latitude: -33.4419, longitude: -70.5408 },
      { name: 'Las Condes', latitude: -33.4125, longitude: -70.5672 },
      { name: 'Lo Barnechea', latitude: -33.3533, longitude: -70.5147 },
      { name: 'Lo Espejo', latitude: -33.5222, longitude: -70.6908 },
      { name: 'Lo Prado', latitude: -33.4447, longitude: -70.7225 },
      { name: 'Macul', latitude: -33.4842, longitude: -70.6014 },
      { name: 'Maipú', latitude: -33.5108, longitude: -70.7572 },
      { name: 'Ñuñoa', latitude: -33.4542, longitude: -70.5986 },
      { name: 'Pedro Aguirre Cerda', latitude: -33.4883, longitude: -70.6739 },
      { name: 'Peñalolén', latitude: -33.4844, longitude: -70.5561 },
      { name: 'Providencia', latitude: -33.4314, longitude: -70.6094 },
      { name: 'Pudahuel', latitude: -33.4408, longitude: -70.7631 },
      { name: 'Quilicura', latitude: -33.3619, longitude: -70.7314 },
      { name: 'Quinta Normal', latitude: -33.4422, longitude: -70.6983 },
      { name: 'Recoleta', latitude: -33.4064, longitude: -70.6417 },
      { name: 'Renca', latitude: -33.4042, longitude: -70.7183 },
      { name: 'San Joaquín', latitude: -33.4914, longitude: -70.6289 },
      { name: 'San Miguel', latitude: -33.4897, longitude: -70.6508 },
      { name: 'San Ramón', latitude: -33.5403, longitude: -70.6439 },
      { name: 'Vitacura', latitude: -33.3989, longitude: -70.575 },
      { name: 'Puente Alto', latitude: -33.6131, longitude: -70.5756 },
      { name: 'Pirque', latitude: -33.6364, longitude: -70.5594 },
      { name: 'San José de Maipo', latitude: -33.6844, longitude: -70.3547 },
      { name: 'Colina', latitude: -33.2025, longitude: -70.675 },
      { name: 'Lampa', latitude: -33.2844, longitude: -70.8764 },
      { name: 'Tiltil', latitude: -33.0856, longitude: -70.9272 },
      { name: 'San Bernardo', latitude: -33.5925, longitude: -70.7056 },
      { name: 'Buin', latitude: -33.7328, longitude: -70.7428 },
      { name: 'Calera de Tango', latitude: -33.6264, longitude: -70.8036 },
      { name: 'Paine', latitude: -33.8094, longitude: -70.7406 },
      { name: 'Melipilla', latitude: -33.6853, longitude: -71.2144 },
      { name: 'Alhué', latitude: -34.0322, longitude: -71.1111 },
      { name: 'Curacaví', latitude: -33.4044, longitude: -71.1311 },
      { name: 'María Pinto', latitude: -33.5133, longitude: -71.1217 },
      { name: 'San Pedro', latitude: -33.8911, longitude: -71.4608 },
      { name: 'Talagante', latitude: -33.6644, longitude: -70.9283 },
      { name: 'El Monte', latitude: -33.6781, longitude: -71.0186 },
      { name: 'Isla de Maipo', latitude: -33.7547, longitude: -70.8997 },
      { name: 'Padre Hurtado', latitude: -33.5708, longitude: -70.8319 },
      { name: 'Peñaflor', latitude: -33.6067, longitude: -70.8789 }
    ]
  },
  {
    name: "Región del Libertador Gral. Bernardo O'Higgins",
    latitude: -34.1708,
    longitude: -70.7444,
    comunas: [
      { name: 'Rancagua', latitude: -34.1708, longitude: -70.7444 },
      { name: 'Codegua', latitude: -34.0347, longitude: -70.6708 },
      { name: 'Coinco', latitude: -34.2667, longitude: -70.95 },
      { name: 'Coltauco', latitude: -34.2417, longitude: -71.0772 },
      { name: 'Doñihue', latitude: -34.2283, longitude: -70.9669 },
      { name: 'Graneros', latitude: -34.0622, longitude: -70.7253 },
      { name: 'Las Cabras', latitude: -34.2881, longitude: -71.3094 },
      { name: 'Machalí', latitude: -34.1814, longitude: -70.6508 },
      { name: 'Malloa', latitude: -34.4442, longitude: -70.9458 },
      { name: 'Mostazal', latitude: -33.9922, longitude: -70.6867 },
      { name: 'Olivar', latitude: -34.1956, longitude: -70.8197 },
      { name: 'Peumo', latitude: -34.3942, longitude: -71.1681 },
      { name: 'Pichidegua', latitude: -34.3547, longitude: -71.2825 },
      { name: 'Quinta de Tilcoco', latitude: -34.3414, longitude: -70.9706 },
      { name: 'Rengo', latitude: -34.4069, longitude: -70.8589 },
      { name: 'Requínoa', latitude: -34.2783, longitude: -70.8136 },
      { name: 'San Vicente', latitude: -34.44, longitude: -71.0747 },
      { name: 'Pichilemu', latitude: -34.3856, longitude: -72.0047 },
      { name: 'La Estrella', latitude: -34.2047, longitude: -71.6569 },
      { name: 'Litueche', latitude: -34.1167, longitude: -71.7333 },
      { name: 'Marchihue', latitude: -34.385, longitude: -71.62 },
      { name: 'Navidad', latitude: -33.9553, longitude: -71.8319 },
      { name: 'Paredones', latitude: -34.6514, longitude: -71.8986 },
      { name: 'San Fernando', latitude: -34.5847, longitude: -70.9889 },
      { name: 'Chépica', latitude: -34.7292, longitude: -71.2778 },
      { name: 'Chimbarongo', latitude: -34.7083, longitude: -71.0428 },
      { name: 'Lolol', latitude: -34.73, longitude: -71.6447 },
      { name: 'Nancagua', latitude: -34.6642, longitude: -71.2217 },
      { name: 'Palmilla', latitude: -34.5947, longitude: -71.3592 },
      { name: 'Peralillo', latitude: -34.4842, longitude: -71.49 },
      { name: 'Placilla', latitude: -34.64, longitude: -71.1239 },
      { name: 'Pumanque', latitude: -34.5983, longitude: -71.6708 },
      { name: 'Santa Cruz', latitude: -34.6392, longitude: -71.3653 }
    ]
  },
  {
    name: 'Región del Maule',
    latitude: -35.4264,
    longitude: -71.6556,
    comunas: [
      { name: 'Talca', latitude: -35.4264, longitude: -71.6556 },
      { name: 'Constitución', latitude: -35.3333, longitude: -72.4167 },
      { name: 'Curepto', latitude: -35.0903, longitude: -72.0192 },
      { name: 'Empedrado', latitude: -35.5942, longitude: -72.28 },
      { name: 'Maule', latitude: -35.5081, longitude: -71.7042 },
      { name: 'Pelarco', latitude: -35.3856, longitude: -71.4422 },
      { name: 'Pencahue', latitude: -35.3978, longitude: -71.815 },
      { name: 'Río Claro', latitude: -35.1856, longitude: -71.2661 },
      { name: 'San Clemente', latitude: -35.5414, longitude: -71.4883 },
      { name: 'San Rafael', latitude: -35.3167, longitude: -71.5333 },
      { name: 'Cauquenes', latitude: -35.9672, longitude: -72.3156 },
      { name: 'Chanco', latitude: -35.7364, longitude: -72.5317 },
      { name: 'Pelluhue', latitude: -35.8117, longitude: -72.5769 },
      { name: 'Curicó', latitude: -34.985, longitude: -71.2394 },
      { name: 'Hualañé', latitude: -34.9786, longitude: -71.8025 },
      { name: 'Licantén', latitude: -34.9856, longitude: -72.0428 },
      { name: 'Molina', latitude: -35.1114, longitude: -71.2828 },
      { name: 'Rauco', latitude: -34.9214, longitude: -71.3097 },
      { name: 'Romeral', latitude: -34.9683, longitude: -71.1342 },
      { name: 'Sagrada Familia', latitude: -35.0028, longitude: -71.3856 },
      { name: 'Teno', latitude: -34.8694, longitude: -71.1772 },
      { name: 'Vichuquén', latitude: -34.8817, longitude: -72.0083 },
      { name: 'Linares', latitude: -35.845, longitude: -71.5978 },
      { name: 'Colbún', latitude: -35.6983, longitude: -71.4117 },
      { name: 'Longaví', latitude: -35.965, longitude: -71.6836 },
      { name: 'Parral', latitude: -36.1425, longitude: -71.8283 },
      { name: 'Retiro', latitude: -36.0506, longitude: -71.7483 },
      { name: 'San Javier', latitude: -35.5919, longitude: -71.7353 },
      { name: 'Villa Alegre', latitude: -35.6744, longitude: -71.7425 },
      { name: 'Yerbas Buenas', latitude: -35.7483, longitude: -71.4925 }
    ]
  },
  {
    name: 'Región de Ñuble',
    latitude: -36.6063,
    longitude: -72.1034,
    comunas: [
      { name: 'Chillán', latitude: -36.6063, longitude: -72.1034 },
      { name: 'Bulnes', latitude: -36.7422, longitude: -72.2981 },
      { name: 'Chillán Viejo', latitude: -36.6217, longitude: -72.1331 },
      { name: 'El Carmen', latitude: -36.8967, longitude: -72.0253 },
      { name: 'Pemuco', latitude: -36.9744, longitude: -72.0319 },
      { name: 'Pinto', latitude: -36.7025, longitude: -71.8925 },
      { name: 'Quillón', latitude: -36.7442, longitude: -72.4764 },
      { name: 'San Ignacio', latitude: -36.7906, longitude: -72.0275 },
      { name: 'Yungay', latitude: -37.1197, longitude: -72.0225 },
      { name: 'Quirihue', latitude: -36.2847, longitude: -72.5392 },
      { name: 'Cobquecura', latitude: -36.1311, longitude: -72.7933 },
      { name: 'Coelemu', latitude: -36.4889, longitude: -72.7025 },
      { name: 'Ninhue', latitude: -36.3969, longitude: -72.3992 },
      { name: 'Portezuelo', latitude: -36.5333, longitude: -72.4333 },
      { name: 'Ránquil', latitude: -36.6433, longitude: -72.5517 },
      { name: 'Trehuaco', latitude: -36.4294, longitude: -72.6719 },
      { name: 'San Carlos', latitude: -36.4242, longitude: -71.9583 },
      { name: 'Coihueco', latitude: -36.6239, longitude: -71.8319 },
      { name: 'Ñiquén', latitude: -36.3, longitude: -71.9 },
      { name: 'San Fabián', latitude: -36.5564, longitude: -71.5567 },
      { name: 'San Nicolás', latitude: -36.5025, longitude: -72.2117 }
    ]
  },
  {
    name: 'Región del Biobío',
    latitude: -36.8201,
    longitude: -73.0444,
    comunas: [
      { name: 'Concepción', latitude: -36.8201, longitude: -73.0444 },
      { name: 'Coronel', latitude: -37.0267, longitude: -73.1394 },
      { name: 'Chiguayante', latitude: -36.9161, longitude: -73.0236 },
      { name: 'Florida', latitude: -36.8167, longitude: -72.6667 },
      { name: 'Hualpén', latitude: -36.7944, longitude: -73.1022 },
      { name: 'Hualqui', latitude: -36.9756, longitude: -72.9389 },
      { name: 'Lota', latitude: -37.0911, longitude: -73.1594 },
      { name: 'Penco', latitude: -36.7417, longitude: -72.9961 },
      { name: 'San Pedro de la Paz', latitude: -36.8408, longitude: -73.1033 },
      { name: 'Santa Juana', latitude: -37.1722, longitude: -72.9372 },
      { name: 'Talcahuano', latitude: -36.7231, longitude: -73.1167 },
      { name: 'Tomé', latitude: -36.6192, longitude: -72.955 },
      { name: 'Lebu', latitude: -37.6083, longitude: -73.6558 },
      { name: 'Arauco', latitude: -37.2464, longitude: -73.3167 },
      { name: 'Cañete', latitude: -37.8028, longitude: -73.3939 },
      { name: 'Contulmo', latitude: -38.0064, longitude: -73.2328 },
      { name: 'Curanilahue', latitude: -37.4722, longitude: -73.3486 },
      { name: 'Los Álamos', latitude: -37.6289, longitude: -73.4561 },
      { name: 'Tirúa', latitude: -38.3314, longitude: -73.4914 },
      { name: 'Los Ángeles', latitude: -37.4697, longitude: -72.3539 },
      { name: 'Antuco', latitude: -37.3325, longitude: -71.6789 },
      { name: 'Cabrero', latitude: -37.0342, longitude: -72.4042 },
      { name: 'Laja', latitude: -37.2694, longitude: -72.7117 },
      { name: 'Mulchén', latitude: -37.7189, longitude: -72.2411 },
      { name: 'Nacimiento', latitude: -37.5028, longitude: -72.6739 },
      { name: 'Negrete', latitude: -37.5858, longitude: -72.5317 },
      { name: 'Quilaco', latitude: -37.6719, longitude: -71.9933 },
      { name: 'Quilleco', latitude: -37.4719, longitude: -72.0192 },
      { name: 'San Rosendo', latitude: -37.2661, longitude: -72.7214 },
      { name: 'Santa Bárbara', latitude: -37.6653, longitude: -71.8208 },
      { name: 'Tucapel', latitude: -37.2858, longitude: -71.9422 },
      { name: 'Yumbel', latitude: -37.0811, longitude: -72.5572 },
      { name: 'Alto Biobío', latitude: -38.0417, longitude: -71.3253 }
    ]
  },
  {
    name: 'Región de la Araucanía',
    latitude: -38.7397,
    longitude: -72.5903,
    comunas: [
      { name: 'Temuco', latitude: -38.7397, longitude: -72.5903 },
      { name: 'Carahue', latitude: -38.7125, longitude: -73.1678 },
      { name: 'Cunco', latitude: -38.9228, longitude: -72.0369 },
      { name: 'Curarrehue', latitude: -39.3564, longitude: -71.4428 },
      { name: 'Freire', latitude: -38.9556, longitude: -72.6289 },
      { name: 'Galvarino', latitude: -38.4117, longitude: -72.7828 },
      { name: 'Gorbea', latitude: -39.1006, longitude: -72.6719 },
      { name: 'Lautaro', latitude: -38.5308, longitude: -72.4339 },
      { name: 'Loncoche', latitude: -39.3664, longitude: -72.6333 },
      { name: 'Melipeuco', latitude: -38.8483, longitude: -71.6983 },
      { name: 'Nueva Imperial', latitude: -38.7425, longitude: -72.9511 },
      { name: 'Padre las Casas', latitude: -38.7661, longitude: -72.6022 },
      { name: 'Perquenco', latitude: -38.4131, longitude: -72.3842 },
      { name: 'Pitrufquén', latitude: -38.9864, longitude: -72.645 },
      { name: 'Pucón', latitude: -39.2731, longitude: -71.9739 },
      { name: 'Saavedra', latitude: -38.7903, longitude: -73.3986 },
      { name: 'Teodoro Schmidt', latitude: -39.0561, longitude: -73.0544 },
      { name: 'Toltén', latitude: -39.2222, longitude: -73.2206 },
      { name: 'Vilcún', latitude: -38.6472, longitude: -72.235 },
      { name: 'Villarrica', latitude: -39.2817, longitude: -72.2264 },
      { name: 'Cholchol', latitude: -38.6042, longitude: -72.8464 },
      { name: 'Angol', latitude: -37.7958, longitude: -72.7125 },
      { name: 'Collipulli', latitude: -37.9553, longitude: -72.4336 },
      { name: 'Curacautín', latitude: -38.4406, longitude: -71.8883 },
      { name: 'Ercilla', latitude: -38.05, longitude: -72.3833 },
      { name: 'Lonquimay', latitude: -38.4419, longitude: -71.2333 },
      { name: 'Los Sauces', latitude: -37.9692, longitude: -72.8286 },
      { name: 'Lumaco', latitude: -38.16, longitude: -72.9236 },
      { name: 'Purén', latitude: -38.0333, longitude: -73.0833 },
      { name: 'Renaico', latitude: -37.6714, longitude: -72.5856 },
      { name: 'Traiguén', latitude: -38.2503, longitude: -72.6775 },
      { name: 'Victoria', latitude: -38.2325, longitude: -72.3333 }
    ]
  },
  {
    name: 'Región de Los Ríos',
    latitude: -39.8142,
    longitude: -73.2459,
    comunas: [
      { name: 'Valdivia', latitude: -39.8142, longitude: -73.2459 },
      { name: 'Corral', latitude: -39.8833, longitude: -73.4333 },
      { name: 'Lanco', latitude: -39.4447, longitude: -72.7883 },
      { name: 'Los Lagos', latitude: -39.8517, longitude: -72.8336 },
      { name: 'Máfil', latitude: -39.6469, longitude: -72.9511 },
      { name: 'Mariquina', latitude: -39.5161, longitude: -72.9697 },
      { name: 'Paillaco', latitude: -40.0767, longitude: -72.8906 },
      { name: 'Panguipulli', latitude: -39.6425, longitude: -72.3333 },
      { name: 'La Unión', latitude: -40.2922, longitude: -73.0806 },
      { name: 'Futrono', latitude: -40.1344, longitude: -72.3956 },
      { name: 'Lago Ranco', latitude: -40.3183, longitude: -72.4939 },
      { name: 'Río Bueno', latitude: -40.3325, longitude: -72.9553 }
    ]
  },
  {
    name: 'Región de Los Lagos',
    latitude: -41.4717,
    longitude: -72.9367,
    comunas: [
      { name: 'Puerto Montt', latitude: -41.4717, longitude: -72.9367 },
      { name: 'Calbuco', latitude: -41.7761, longitude: -73.1311 },
      { name: 'Cochamó', latitude: -41.4939, longitude: -72.3083 },
      { name: 'Fresia', latitude: -41.155, longitude: -73.4306 },
      { name: 'Frutillar', latitude: -41.1147, longitude: -73.0483 },
      { name: 'Los Muermos', latitude: -41.3989, longitude: -73.4739 },
      { name: 'Llanquihue', latitude: -41.2589, longitude: -73.0078 },
      { name: 'Maullín', latitude: -41.6094, longitude: -73.6053 },
      { name: 'Puerto Varas', latitude: -41.3194, longitude: -72.9853 },
      { name: 'Castro', latitude: -42.4722, longitude: -73.7731 },
      { name: 'Ancud', latitude: -41.8683, longitude: -73.8267 },
      { name: 'Chonchi', latitude: -42.6231, longitude: -73.7744 },
      { name: 'Curaco de Vélez', latitude: -42.4333, longitude: -73.6 },
      { name: 'Dalcahue', latitude: -42.3789, longitude: -73.6528 },
      { name: 'Puqueldón', latitude: -42.5933, longitude: -73.6811 },
      { name: 'Queilén', latitude: -42.8925, longitude: -73.4756 },
      { name: 'Quellón', latitude: -43.1189, longitude: -73.6169 },
      { name: 'Quemchi', latitude: -42.1464, longitude: -73.4756 },
      { name: 'Quinchao', latitude: -42.4736, longitude: -73.4189 },
      { name: 'Osorno', latitude: -40.5739, longitude: -73.1331 },
      { name: 'Puerto Octay', latitude: -40.9744, longitude: -72.8856 },
      { name: 'Purranque', latitude: -40.9167, longitude: -73.1667 },
      { name: 'Puyehue', latitude: -40.6631, longitude: -72.6106 },
      { name: 'Río Negro', latitude: -40.7933, longitude: -73.2106 },
      { name: 'San Juan de la Costa', latitude: -40.5161, longitude: -73.665 },
      { name: 'San Pablo', latitude: -40.4011, longitude: -73.0231 },
      { name: 'Chaitén', latitude: -42.9167, longitude: -72.7167 },
      { name: 'Futaleufú', latitude: -43.185, longitude: -71.8653 },
      { name: 'Hualaihué', latitude: -41.8794, longitude: -72.7428 },
      { name: 'Palena', latitude: -43.6192, longitude: -71.8047 }
    ]
  },
  {
    name: 'Región de Aysén del Gral. Carlos Ibáñez del Campo',
    latitude: -45.5712,
    longitude: -72.0685,
    comunas: [
      { name: 'Coyhaique', latitude: -45.5712, longitude: -72.0685 },
      { name: 'Lago Verde', latitude: -44.2333, longitude: -71.8333 },
      { name: 'Aysén', latitude: -45.4056, longitude: -72.6953 },
      { name: 'Cisnes', latitude: -44.75, longitude: -72.7 },
      { name: 'Guaitecas', latitude: -43.8833, longitude: -73.75 },
      { name: 'Cochrane', latitude: -47.2547, longitude: -72.5731 },
      { name: 'O\'Higgins', latitude: -48.4667, longitude: -72.5667 },
      { name: 'Tortel', latitude: -47.7958, longitude: -73.5358 },
      { name: 'Chile Chico', latitude: -46.5414, longitude: -71.7225 },
      { name: 'Río Ibáñez', latitude: -46.2917, longitude: -71.9367 }
    ]
  },
  {
    name: 'Región de Magallanes y de la Antártica Chilena',
    latitude: -53.1638,
    longitude: -70.9171,
    comunas: [
      { name: 'Punta Arenas', latitude: -53.1638, longitude: -70.9171 },
      { name: 'Laguna Blanca', latitude: -52.25, longitude: -71.25 },
      { name: 'Río Verde', latitude: -53.1167, longitude: -71.8333 },
      { name: 'San Gregorio', latitude: -52.3333, longitude: -70.1667 },
      { name: 'Cabo de Hornos', latitude: -54.9333, longitude: -67.6167 },
      { name: 'Antártica', latitude: -75.0, longitude: -70.0 },
      { name: 'Porvenir', latitude: -53.2981, longitude: -70.3606 },
      { name: 'Primavera', latitude: -52.7167, longitude: -69.25 },
      { name: 'Timaukel', latitude: -54.0, longitude: -69.5 },
      { name: 'Natales', latitude: -51.7269, longitude: -72.5061 },
      { name: 'Torres del Paine', latitude: -51.2556, longitude: -72.3522 }
    ]
  }
];

async function main() {
  // Limpiar tablas dependientes primero (Comuna depende de Region)
  await prisma.comuna.deleteMany();
  await prisma.region.deleteMany();

  for (const region of regionesYComunas) {
    const createdRegion = await prisma.region.create({
      data: {
        name: region.name,
        latitude: region.latitude,
        longitude: region.longitude,
        comunas: {
          create: region.comunas.map((comuna) => ({
            name: comuna.name,
            latitude: comuna.latitude,
            longitude: comuna.longitude
          }))
        }
      }
    });
    console.log(`Región creada: ${createdRegion.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
