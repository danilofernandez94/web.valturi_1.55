const MATERIALS_WHATSAPP = typeof WHATSAPP_LINK !== 'undefined' ? WHATSAPP_LINK : 'https://wa.link/ogxnv3';


const driveImage = (id, width = 1600) => `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
const C = (name, id, options = {}) => ({ name, id, ...options });


const FAMILY_META = {
  panas: { label: 'Panas', order: 1 },
  linos: { label: 'Linos', order: 2 },
  cuerinas: { label: 'Cuerinas', order: 3 },
  cuero: { label: 'Cuero vacuno', order: 4 },
  texturas: { label: 'Texturas especiales', order: 5 }
};


const APPLICATIONS = {
  tapiceria: {
    title: 'Tapicería',
    eyebrow: 'Para muebles y piezas de interior',
    description: 'Panas, linos, cuerinas, cuero vacuno y texturas seleccionadas para renovar sillones, sillas, respaldos y piezas a medida.',
    status: '18 colecciones disponibles',
    families: ['panas', 'linos', 'cuerinas', 'cuero', 'texturas'],
    previewIds: ['19lklByGH5HB_ruT7HCHbz-GTAnE9yF4Y', '1ryKE82gLtd2KVjp43lFR5WEgTWoO9Ao1', '1av8UUkba3vqGK3pzG7NXzYFQbUCvTx-2']
  },
  cortineria: {
    title: 'Cortinería',
    eyebrow: 'Caída, luz y textura',
    description: 'Gazas, tejidos, tusor liviano y pesado, y blackout. La biblioteca se irá completando con fotos reales, transparencia y caída.',
    status: 'Colecciones en preparación',
    families: []
  },
  exterior: {
    title: 'Exterior',
    eyebrow: 'Materiales para intemperie',
    description: 'Cuerinas outdoor y lonas pensadas para proyectos donde importan resistencia, mantenimiento y comportamiento al exterior.',
    status: 'Colecciones en preparación',
    families: []
  }
};


const UPCOMING = {
  cortineria: [
    ['Gazas', 'Transparencia, liviandad y movimiento.'],
    ['Tejidos', 'Texturas para graduar luz y presencia.'],
    ['Tusor liviano', 'Caída suave para ambientes cálidos y relajados.'],
    ['Tusor pesado', 'Mayor cuerpo y presencia visual.'],
    ['Blackout', 'Opciones pensadas para control de luz y privacidad.']
  ],
  exterior: [
    ['Cuerina outdoor', 'Superficies de fácil mantenimiento para exterior.'],
    ['Lonas', 'La familia queda preparada para las subcategorías que se incorporen.']
  ]
};


const MATERIAL_COLLECTIONS = [
  {
    id: 'pana-panne',
    title: 'Pana Panne',
    shortName: 'Panne',
    family: 'panas',
    application: 'tapiceria',
    description: 'Textil de tacto suave y efecto marmolado, pensado para tapicería y cortinería.',
    intro: 'La Pana Panne es una tela de calidad premium con proceso antimancha que repele líquidos. Tiene efecto marmolado, es semiopaca y pesada, con tacto suave y buena presencia para tapizados y cortinas.',
    tags: ['Antimancha', 'Repele líquidos', 'Efecto marmolado'],
    specs: [
      ['Tipo', 'Pana'],
      ['Composición', '100% poliéster'],
      ['Ancho', '1,45 m'],
      ['Peso', '540 g por metro lineal'],
      ['Tratamiento', 'Antimancha · repele líquidos']
    ],
    uses: ['Tapizados', 'Sillas', 'Sillones', 'Sofás', 'Acolchados', 'Almohadones', 'Cortinería'],
    performanceNote: 'Esta colección cuenta con tratamiento antimancha. Más adelante este bloque podrá incorporar la prueba visual de repelencia.',
    colors: [
      C('Natural', '19lklByGH5HB_ruT7HCHbz-GTAnE9yF4Y'), C('Gamuza', '1SkcfUWjlHNrMIQudq6wv9sThvK_1ioSP'),
      C('Dulce de leche', '1nnxUb1TFBXNAGaRMIOnZ3V7Zb2_5-T3R'), C('Orange', '1MJN3_8gBryeDGiYyAapvvpur0qUMo4hG'),
      C('Rojo', '1NFDkeAh6HU3OyXJ9hRfz9vlmZe6s1M8M'), C('Borravino', '1kt11mii1pjJPcSxAKYq4VnDbq1--gAcA'),
      C('Fucsia', '1oBAa8f_yixwQXj8vkaenr7bWa_fkQlps'), C('Violeta', '1WnE1JaTiXSW47Qr4PHf4Z-fJsJaqt69v'),
      C('Lima', '16n1Dlfo5kYwIjDrmgE-Ze35XQEx3qh-d'), C('Verde inglés', '1luxHjWa14OaiKz2kREB2qS8ovoWtja8R'),
      C('Jade', '1d5Dd6XK7oVcLbFxiUCZP0fxHzaI8cCSI'), C('Perla', '1XNURq-6PH7Q94VRfSlUIaeskvQPAUFGp'),
      C('Gris', '1yil-CRl8gf9bUSkcMtsInY4UNFbgMA51'), C('Océano', '17bzKSGwGTMVtNQIWFO-dq5ePQFqdrWxb'),
      C('Azul', '1fkheQERhlZvGDIQs3lwwzbYVHX5Lqywc'), C('Negro', '1p1JWL_M5vxXfVHvjg45kwVEJM4IQk-AT')
    ]
  },
  {
    id: 'pana-thor', title: 'Pana Thor', shortName: 'Thor', family: 'panas', application: 'tapiceria',
    description: 'Colección de pana de lectura mate y textura marcada, disponible en una paleta compacta de tonos.',
    intro: 'Pana Thor reúne una selección de tonos para tapicería interior. La ficha prioriza la lectura real del color y el detalle de textura del muestrario.',
    tags: ['Textura visible', 'Tapicería interior'],
    specs: [['Tipo', 'Pana'], ['Colores', '9 tonos cargados'], ['Aplicación', 'Tapicería interior']],
    uses: ['Sillas', 'Sillones', 'Sofás', 'Respaldos', 'Almohadones'],
    colors: [
      C('Topo', '10IzhZpd-6XEwTg82xiTYor0R4_G0gzRq'), C('Natural', '1kWXKkOubmqEKGNCpTHwTjcWjE4hgfYX9'),
      C('Gris', '1rbBrA99Zf2JI2HmIMHZDAq_jKWXs_hJW'), C('Gris oscuro', '1zgJFsEcMSBvDMNZy9EnHpLPGY_nGNsXv'),
      C('Gamuza', '1Z85FohKIl88ztjpevVFSizoVvUdq85B3'), C('Dijon', '1tX-P91A2kC9jDEBRDzQzEjqJV6r2bzch'),
      C('Bronce', '19VqWljzOWDmU0NxrB-SSrpnZ6iGf3KLu'), C('Azul', '12vRCa5oCckATU3Tp8zR3GY3oBxQLc8YB'),
      C('Alga', '1ZPZhS2mgMRU7Bfb2M8_lUi_tbuivykkU')
    ]
  },
  {
    id: 'pana-hulk', title: 'Pana Hulk', shortName: 'Hulk', family: 'panas', application: 'tapiceria',
    description: 'Pana de tacto suave y presencia cálida, pensada para tapicería interior.',
    intro: 'Pana Hulk es un tejido suave al tacto, de 380 g de peso y composición 100% poliéster. Su textura y calidez visual la hacen especialmente agradable para proyectos de interior.',
    tags: ['Suave al tacto', '100% poliéster', 'Otoño · invierno'],
    specs: [['Tipo', 'Pana'], ['Composición', '100% poliéster'], ['Ancho', '1,40 m'], ['Peso', '380 g'], ['Tacto', 'Suave']],
    uses: ['Sillas', 'Sillones', 'Sofás', 'Respaldos', 'Almohadones'],
    colors: [
      C('Ivory', '1ipv_OZBCZpZHvRV_DDNvghdNVYROftWB'), C('Latte', '1qB0VoieQU7IsWCFLyLZ5veXDIpU8lP-O'),
      C('Mustang', '15U_smBGG0L6y1B4USl6dUNaS5WqoHLPu'), C('Stone', '1wSSVZiuIsylVirQkvy6P4JkZJeFvmvrv'),
      C('Bronce', '1v77yLJjtAklNQSBuslnluxo8CHRYQerW'), C('Dijon', '1ufZxJO_AifqLzM312SfjBZrZQlEYeJMV'),
      C('Verde inglés', '1JZ892kt9OK5QQ7PIbGVXzABAnrelBLi1'), C('Musgo', '1Q41ZrHWgmBaNOXHlKSqtCfvhgKNuF0kR'),
      C('Azul', '14TFWYEg4LzZhK1p-_8VXzq87axP11twi', { rotate: 90 }), C('Piedra', '14AYMa3rscz1m_AHp3rXi44mrthuo5U7O'),
      C('Ónix', '1uA0e8gBnYRQ9l7c_j9EmEGZqDB5EPFs7'), C('Nickel', '1EKmtNjzppeqvZjJ0G-zxyRID0BhqYQgD')
    ]
  },
  {
    id: 'pana-velutti', title: 'Pana Velutti', shortName: 'Velutti', family: 'panas', application: 'tapiceria',
    description: 'Colección de pana en diez tonos, desde neutros hasta azules de mayor intensidad.',
    specs: [['Tipo', 'Pana'], ['Colores', '10 tonos cargados'], ['Aplicación', 'Tapicería interior']],
    colors: [
      C('Park blue', '1idGiU3v7598BAKEY1wuUTaPZTigkiF0o'), C('Ultramar', '143NNbcnaWeC93OxY8-oGENyBJDULFcUD'),
      C('Ocean', '1SzZ4ZOwl60BN3hA3l-aiLcnkpZ-4kyht'), C('Almond', '1AVYi75RRMWNG1nt7zhJOUE-KIabNKNfi'),
      C('Yellow', '1mcVHHo8ueIX9Y-FnUKSMnJl_OhAfZMgv'), C('Gris oscuro', '1LZWr6PsKHnLtiH0ezjoTYWCzyEaxSWdO'),
      C('Chinchilla', '1w120mQ_PBCDqmauzdNSA_sFf7YXrvtdf'), C('Roca', '12wUGFWZUUWR2zEJb4i0J02Q52ITTuSGc'),
      C('Seco', '1OY3iCSh5lKbg8UcBrjfI8nI8x-_17cLF'), C('White', '1IqZJkOaOpslK0Pk3xk6PJKBhUi5L2N4H')
    ]
  },
  {
    id: 'pana-velvet', title: 'Pana Velvet', shortName: 'Velvet', family: 'panas', application: 'tapiceria',
    description: 'Colección de pana con quince tonos que combinan neutros, tierras, verdes, vino e índigo.',
    specs: [['Tipo', 'Pana'], ['Colores', '15 tonos cargados'], ['Aplicación', 'Tapicería interior']],
    colors: [
      C('Marfil', '1fqF1as01nk0bLu90f4zhXyTTheZ5ypib'), C('Sepia', '1T14q4nMJMRDlEZPpHI4SqEsTfBL1Uxw8'),
      C('Visón', '1_TmTEFKUQA_cRyjosjl2aTGKZhIIp1V-'), C('Tabaco', '1Fxsy0NJ_shTMuhQ9H-0FzhTykC9x5KZB'),
      C('Azafrán', '1fl0FUbvynR7fucp2zMg8vKUf_IijCul2'), C('Óxido', '1iFphJSgvAHxHE5z4GNMWoZjE_Fuk61as'),
      C('Castaño', '1_hdnrfhG7DQClY5INjVGfiNGneuiZfeJ'), C('Café', '14PtyjbSqEhzO_49Qu40Z4lDbFql0ynKA'),
      C('Verde', '1oaAaOBGZpACX6a2iz-RHQzoFyxxVUohv'), C('Vino', '1QrHl1bJWM8k_dNOrbvOiOfyK_CAxCLcY'),
      C('Plata', '16VNQA2vy8BZ4QgXXvZqSG0nEjYfzLB5B'), C('Grafito', '1EhuhFY2GYRvcrXo3xwmtP7OrVP8QXrKW'),
      C('Gris pimienta', '1L3eWMRV0t3ssuXxfluuh8237o5EucqQA'), C('Índigo', '1g3Ce9PX24G0u0YsNSA5YmVqnYWu6zPJl'),
      C('Negro', '1LET6EbLg2ZMdJ_eLMEvpqMyoBfOoOqx_')
    ]
  },
  {
    id: 'lino-boucle-largo', title: 'Lino Boucle largo', family: 'linos', application: 'tapiceria',
    description: 'Colección de ocho tonos con una textura de mayor volumen visual.',
    specs: [['Familia', 'Lino'], ['Colores', '8 tonos cargados'], ['Aplicación', 'Tapicería interior']],
    colors: [C('Gris claro','1i-XnMHj8NAo6S4Ejm0oSfaqf68MrUMKY'),C('Blanco','1GTZPYMqY3IAygCGHMupPd3ObmjXnoV0H'),C('Beige','1co34INltIOORCAJRUyDs0vLnt39IUZvU'),C('Azul','1WyoV8YlaU-1QqkIo0AnTxEfrdCFeu9Xq'),C('Visón','1Xv6JLkGXILYZO5xCQzEXuccHo8BOUNjR'),C('Gris medio','1VqWGd6ErGqnYuRoLt3EiQRdcApjXecqo'),C('Gris oscuro','1bdm-dAjely8rZPbrsTRLBOuZj6iT3yEH'),C('Gris plomo','1VarEkvjKc0MNoyzkTIl8e4twv8t7n_yj')]
  },
  {
    id: 'lino-dot', title: 'Lino Dot', family: 'linos', application: 'tapiceria',
    description: 'Paleta de trece tonos que combina neutros, verdes, azules y acentos cálidos.',
    specs: [['Familia','Lino'],['Colores','13 tonos cargados'],['Aplicación','Tapicería interior']],
    colors: [C('Onyx','1kKLtzGxXMtZJC1KGZmV7wa8ICX-aY7Bn'),C('Nickel','1VxElmI3ecQ7LKUNUpRneWnmtJdZ25LyJ'),C('Green','1KKLisKsPo85V33K5r6oA6zwN4wxH7Hde'),C('Blue','13rkxIgQ-FUYJoXmslHuOpRZIeMhlOugz'),C('Perla','1GG9hdUBAap2S0UZEh8evBoNGXfgcts6O'),C('Pink','1hzQIL-3rhdck3y_4MKT_3og5ighRS_aF'),C('Bronze','15k8Mf2SfXlXvR7V2y7kqaeAjdUzaHJYH'),C('Gold','1Vm91bBg6u-U3z6iJ7wf1rHv7MqF9a3h8'),C('Mustang','1BV1uEqvdIp-2yZTN0hEDJQFmd3Vp6CCl'),C('Stone','19OTjTcLoM2GAZ8zbp3g9QXcR3D9XeokR'),C('Mastic','12Uw_8O5-2URdVer-ab6OqRLuSuxICbSo'),C('Latte','1pHO99Zp-rsBTJ8ChhSsPBy3wTXRQMN8d'),C('Ivory','1pIVigUyP4wNxlsz6t-npSZzYSeH83728')]
  },
  {
    id: 'lino-mecha', title: 'Lino Mecha', family: 'linos', application: 'tapiceria',
    description: 'Colección amplia de dieciséis tonos, con una paleta que va de marfiles y arenas a petróleo, navy y negro.',
    specs: [['Familia','Lino'],['Colores','16 tonos cargados'],['Aplicación','Tapicería interior']],
    colors: [C('Ivory','1XHUR1nxlWndbN5Hew4D03mGWKIVJ2TFE'),C('Arena','1Bc95ViAkbr06fhaWJJNzbYYOt3YnJPWL'),C('Gamuza','1U7x0juGafSZmmE-4glccZQ4Q1dHt9MEO'),C('Gamo','1YaGS9c5zXLpu-82aUDSoUljPOisBypUp'),C('Tabaco','1EjUgvNIunmV0Wssv9oAlnZotiX5qc7CE'),C('Sambayón','1h9_VA-5BZq8sK97d8zpfatVwreHu8YdB'),C('Cobre','1dF4B4jL_bERv4TCXaS0EVwQuF1Twkqgf'),C('Rojo','13vNAwRmpt4TilunGy_-uCGj0VvvHjTB9'),C('Malbec','1q8SrAgleIko3_FPrK5E_6zkas_rDQU6u'),C('Turquesa','1F6PO9vGsSaLW_B3vbvDgxkvUeEa1zdd0'),C('Petróleo','1Fk86mr7shR_6B5Bw6HK94suhVUJJu_Zn'),C('Navy','1LQtoplkoqTmaTjZT58ygjZDJ8WkfU6cl'),C('Violeta','1IyrnYP7H6qWKdKX5udJHXf8aBjjQ19LK'),C('Plata','1EbyTO9zTEv7VK_XuQCrGReyzMgorOy3o'),C('Gris','1TYnxFumfUBNg7gEAk2yuXHHAaDn1bEDe'),C('Negro','1JhToLvvrvUnlAY6Ld0LH8Dz0wN2iMaZh')]
  },
  {
    id: 'lino-spazio', title: 'Lino Spazio', family: 'linos', application: 'tapiceria',
    description: 'Diecisiete tonos con una base de neutros y tierras, acompañados por verdes, azul y petróleo.',
    specs: [['Familia','Lino'],['Colores','17 tonos cargados'],['Aplicación','Tapicería interior']],
    colors: [C('Gamuza','1FrrcmYreHaUdGJjS7d7k3IhRSmknMHuF'),C('Gris','1KGHVyWQa3542CTAKuNw0ScAczebJgT0v'),C('Borravino','17e4ydSrMg4RnWbgiArkRBoVQD_mA9cGS'),C('Azul','18aKGDLOrDf1oOtU4JYM8bJ81oJhfdIf5'),C('Musgo','1kkKHhlrj3sJE7-992FBJdadPismWpAZb'),C('Verde','11EkQit2I3l3siWTguKzWQOZF-HHMs8Cx'),C('Arena','1iDYZUW6AvDvVqycI7mt6f9MRNelkPxxJ'),C('Lino','12xhNjxH-6iv0JOqQIxZdvhX4pehHfvsk'),C('Beige','1HI95WlEHqYusx9hNiN9BtFi23fwkiGs9'),C('Stone','1NXyNSLMGaGCAYaHlvTfEvCOf8E0g5ZHF'),C('Crudo','1-rcuPL4xoGdZ1sT9nrMPOXv7GqP2uCb6'),C('Óptico','1kD2azoTKpe_-q834UMqgW2iBKw2qF4lv'),C('Chocolate','1TKcHR4qXVXOcB9k55hJFwVua0SFl69KD'),C('Africano','1zF9fS3uzyY1C8zaaP6UM1r1LHDZW2avw'),C('Perla','1VgDKZDJmA8aGKVa4LVQW7I3iPaPHE2Wa'),C('Petróleo','1I-IWv4LYmpvRWSoy33WzT5XD8b7rg_38'),C('Negro','1cEF5Sv6ck4mGFaaOB_PqMKVGWqbzF2Kb')]
  },
  {
    id: 'lino-scandal', title: 'Lino Scandal', family: 'linos', application: 'tapiceria',
    description: 'Once tonos con una lectura contemporánea que combina marfiles, tierras, verdes y grises profundos.',
    specs: [['Familia','Lino'],['Colores','11 tonos cargados'],['Aplicación','Tapicería interior']],
    colors: [C('Black','1Utb9E3fRqnFYmabnMw91LtgccCgG6vmJ'),C('Nickel','1SQHdT64LUuxVr64CVTkV1ppaI3gPivZt'),C('Ónix','1GI8HcIxYrnB3o-Zdh8kgZ5CmsW0lee-O'),C('Stone','1EH_i-GxyMidmaDn1tTW0NHRunmPIyIQf'),C('Pine','11BR7vXJlsuIdsc_jkjkXwiDPUSX2lOrG'),C('Coral','1l3_t8e8u-TkfLTwh-Bvb5a7fqCKVhJyH'),C('Mostaza','1AJRDmV3bnkLrRDzT4QvLkqFu9VoSsPSL'),C('Kaki','1kaSAnCE3wlUDXovtxIouhO36agcxj-z2'),C('Yute','1hSD70ojN9vYK2YY1Wk8WDmtHSy6LFaP1'),C('Antique','1ryKE82gLtd2KVjp43lFR5WEgTWoO9Ao1'),C('Ivory','1xW_GSMUvg0bFQqKGSkox94lA72pBJRBT')]
  },
  {
    id: 'cuerina-legards', title: 'Cuerina Legards', family: 'cuerinas', application: 'tapiceria',
    description: 'Colección de cuerina disponible en cinco tonos para explorar visualmente antes de definir el proyecto.',
    specs: [['Familia','Cuerina'],['Colores','5 tonos cargados']],
    colors: [C('Negro','1FNxFSY8yHupOmjLX4fQ3kSk6h27x8QG9'),C('Verde','1dvuX322iE8rylk4V2-L0aVcHS-aYpJZD'),C('Saddle','1GWS0IoxB9LeFHp4pvpwvE4l38X0xYFrI'),C('Grey','1iNT4C-jYvV8vcmNOuxiKyslIati1JWKR'),C('Light grey','1KprNsYlDyBDa6qup-3wppczWj10pJx5j')]
  },
  {
    id: 'cuerina-marbella', title: 'Cuerina Marbella', family: 'cuerinas', application: 'tapiceria',
    description: 'Diez tonos centrados en neutros, tierras y grises para combinaciones versátiles.',
    specs: [['Familia','Cuerina'],['Colores','10 tonos cargados']],
    colors: [C('Negro','17gyl4C2057Qz1pWjaOZvVYZ5V1ZfIK9x'),C('Dark grey','1j7xDRnkOaYhQ-naASCznx7-4ZxxNK7eX'),C('Gris','1___WPNlLQItMfM0yHyeDfJ9XBXSmENuK'),C('Tostado','1voP5adC5fxyfPFdb3yJUVoq4Bgsxm_0O'),C('Miel','1Foq1dD3gK20sNXHuLqiMjChiHkuXY21Y'),C('Arena','1bVEM8V46Jdz0zMPnIRadsWzPg3CHecRS'),C('Hueso','1hASQMZDR3LMtjuESPXr4Ed_HoHXwMSCj'),C('Piedra','1QDjYxH__wA7V76GTI3ExSk5vH-s84Whs'),C('Perla','1g7bsGCgIodRLAUOLM4sbEWIngUW_NzJU'),C('Blanco','1CbAR4s2b7FzhkHOuWF-jRctLNGihrbVh')]
  },
  {
    id: 'cuerina-nebraska', title: 'Cuerina Nebraska', family: 'cuerinas', application: 'tapiceria',
    description: 'Nueve tonos con una paleta clásica de negros, grises, marrones y neutros claros.',
    specs: [['Familia','Cuerina'],['Colores','9 tonos cargados']],
    colors: [C('Grey','1zicWCdEIeW0qWZcSEX6K-y6GGrD_E8qL'),C('Chocolate','1GlAf32se5JdX3JZU6DXWfYyfn87JPo9r'),C('Tabaco','1TIBX6U6_DGB8a3pTRduMcx5MBKDFDbsK'),C('Saddle','1pk40XrboB05X80oQZBKAGXycSWnLbryX'),C('Miel','1FpMWlFogRG_t3-SRgjwmHmU3aPb2ZgTi'),C('Light grey','1zbAtiRpTQlm_Ivt4_Yga5N1yn5HRYAt6'),C('Pearl','1CNKUrQMsFtv7Nw6mU4ycuPPqOfbdjSrc'),C('Hueso','14F1OENCbUbkWXap-UQnB06AQ5lpAKzz9'),C('Black','1Ggwmd5DBFQBXRjGSmeOcZ8M4mhhV7nYA')]
  },
  {
    id: 'cuero-vacuno-mantra', title: 'Cuero vacuno Mantra', family: 'cuero', application: 'tapiceria',
    description: 'Cinco tonos de cuero vacuno que recorren negro, chocolate, suela y rojos profundos.',
    specs: [['Familia','Cuero vacuno'],['Colores','5 tonos cargados']],
    colors: [C('Red','1nMdRRaOD45-bxKhoY6XzQKZ61pg_fvmt'),C('Suela','1J9htfv8kj_eN32dWP1PfbmZ3rRTWlOJX'),C('Cogñac','1dBnNs96Taw5vgIF9gtgQ_4-MpICrCo6D'),C('Chocolate','183sBndMUiGD6547gEc76NFeo74QpMjbj'),C('Negro','1c4cpwcB5CkE7Wx1-Nu5aOdlGdix_U4Kl')]
  },
  {
    id: 'cuero-vacuno-novapelli', title: 'Cuero vacuno Novapelli', family: 'cuero', application: 'tapiceria',
    description: 'Colección compacta de cuero vacuno en dos tonos.',
    specs: [['Familia','Cuero vacuno'],['Colores','2 tonos cargados']],
    colors: [C('Grey','1EJbld0IDLBksTWJNzxosERpwtuui0DRO'),C('Moss','1G9QUJp4hYFYoX93qP0t3ZcFzCylAScYl')]
  },
  {
    id: 'cuero-vacuno-riviera', title: 'Cuero vacuno Riviera', family: 'cuero', application: 'tapiceria',
    description: 'Dieciséis tonos de cuero vacuno con una paleta amplia de tierras, grises, rojos y neutros.',
    specs: [['Familia','Cuero vacuno'],['Colores','16 tonos cargados']],
    colors: [C('Negro','1wyx2xKFB3riYWs-omiJpY9ywe6pfregg'),C('Light grey','14B0hm5tkVrTbMwE2JjNlmyuGVubcdxTd'),C('Charcoal','11GSMFELOjRrpFlDNElcGyH5lJkYmr6vk'),C('Gris','13dvOGPBqohjn_1ntHsIamN4oaGXIPq2b'),C('Ceniza','1xZZiktpf5lzK6yHTk9tJ5MYQF6mVU4DY'),C('Angora','1hVEnoVQwj1WN5-um4HmYrzoqbwAV4SWk'),C('Visón','1pyw_meAnSNnBX0cfGoV8YQc_L-50F4hS'),C('Miel','1zvcJSvuYoyJ0nxADT28U2Df3Mr8nywvu'),C('Saddle','1av8UUkba3vqGK3pzG7NXzYFQbUCvTx-2'),C('Óxido','1huhrxtvGw4wkZ7Mt09Pf2SoEoRTEwv3L'),C('Almond','1xdCVJGvwJyax7uPllS8SJxDB0dEBiL9l'),C('Red','12azrqf4YGDGZYVnm4F_AaDryguZjo3w4'),C('Burgundy','1klvlq9IDLmVxhqSnNsy7-JeUg0CQD8FE'),C('Coconut','1L13m4qYlkgbK6UxHskdY3IAuzALX1N1o'),C('Habano','1zGKDjgtvswB-AZQkqVofmGlE9z2EMEZ-'),C('Chocolate','1fUyZ1hcFfGZ1ODacynurhzUlctLXQbHJ')]
  },
  {
    id: 'cuero-vacuno-stragrain', title: 'Cuero vacuno Stragrain', family: 'cuero', application: 'tapiceria',
    description: 'Ocho tonos de cuero vacuno, desde blanco y hueso hasta chocolate, rojo y negro.',
    specs: [['Familia','Cuero vacuno'],['Colores','8 tonos cargados']],
    colors: [C('Chocolate','1erSxJESHEKyGkN4NTkbBBhh5zV7qrSfm'),C('Camel','154SksI1svqcUmx_R0f17o6Ld8VH4bj5L'),C('Hueso','1cbgzg9wEC7t7_dZvS_GlOMdJIwNHS1cv'),C('Biscuit','1DGqNPytllpnH5XaxZlWx6KOSsCEyGOiO'),C('Red','1MqtfyKnZVw2m_r2MMn4lIxFITm57BDfs'),C('Pebble','1eElzqIxsMIavZSbuFR1o7TxFuCL_frCt'),C('Blanco','1trGSMPyrufaHdighCFSaAZyAxCV4S3sm'),C('Negro','1gxb6Mi_UPqX9YqVEgbJsk-s3TX3GLTp2')]
  },
  {
    id: 'sheep', title: 'Sheep', family: 'texturas', application: 'tapiceria',
    description: 'Colección de cuatro referencias claras y naturales para explorar textura y tono.',
    specs: [['Colección','Sheep'],['Colores','4 referencias cargadas']],
    colors: [C('White','1muKL0G_UXLa4wU-fWZH7z2exGX1y2fCp'),C('Crudo 02','1QTMagzDRXUHl1R2CdJgoyUBSim3yFwtx'),C('Natural','1m6iwDN1wdyZN27Bs8xhdFvQ4aWZUCNHE'),C('Crudo 04','1AbiM8idmLHdmIqe6coBlgzQyIbbJBHK0')]
  }
];


const state = { application: 'tapiceria', family: 'all', query: '' };


function trackMaterialEvent(event, payload = {}) {
  if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...payload });
}


function familyLabel(key) { return FAMILY_META[key]?.label || key; }
function collectionName(item) { return item.shortName || item.title; }
function colorHaystack(item) { return item.colors.map((color) => color.name).join(' ').toLowerCase(); }


function imageClass(color, zoom = false) {
  const classes = ['texture-img'];
  if (color.rotate === 90) classes.push('is-rotated-90');
  if (zoom) classes.push('is-zoomed');
  return classes.join(' ');
}


function renderPortalMedia(appKey) {
  const app = APPLICATIONS[appKey];
  if (app.previewIds?.length) {
    return `<div class="portal-media portal-media-mosaic">
      <img src="${driveImage(app.previewIds[0], 900)}" alt="Textura de tapicería" loading="lazy" decoding="async" />
      <img src="${driveImage(app.previewIds[1], 700)}" alt="Textura de tapicería" loading="lazy" decoding="async" />
      <img src="${driveImage(app.previewIds[2], 700)}" alt="Textura de tapicería" loading="lazy" decoding="async" />
    </div>`;
  }
  return `<div class="portal-media portal-media-abstract portal-${appKey}" aria-hidden="true"><span></span><span></span><span></span></div>`;
}


function renderApplicationPortals() {
  const root = document.getElementById('materialPortals');
  if (!root) return;
  root.innerHTML = Object.entries(APPLICATIONS).map(([key, app], index) => `
    <button type="button" class="application-portal ${state.application === key ? 'is-active' : ''} ${index === 0 ? 'is-featured' : ''}" data-application="${key}" aria-pressed="${state.application === key}">
      ${renderPortalMedia(key)}
      <div class="portal-overlay"></div>
      <div class="portal-copy">
        <span class="portal-eyebrow">${app.eyebrow}</span>
        <div class="portal-title-row"><h2>${app.title}</h2><span aria-hidden="true">↗</span></div>
        <p>${app.description}</p>
        <span class="portal-status">${app.status}</span>
      </div>
    </button>`).join('');


  root.querySelectorAll('[data-application]').forEach((button) => {
    button.addEventListener('click', () => {
      state.application = button.dataset.application;
      state.family = 'all';
      renderApplicationPortals();
      renderFamilyNavigation();
      renderMaterialsLibrary();
      trackMaterialEvent('materials_application_select', { materials_application: state.application });
      document.getElementById('collectionsStart')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}


function renderFamilyNavigation() {
  const root = document.getElementById('materialsFamilyNav');
  if (!root) return;
  if (state.application !== 'tapiceria') {
    root.innerHTML = '';
    return;
  }
  const keys = [...new Set(MATERIAL_COLLECTIONS.filter((item) => item.application === state.application).map((item) => item.family))]
    .sort((a, b) => (FAMILY_META[a]?.order || 99) - (FAMILY_META[b]?.order || 99));
  root.innerHTML = [`<button type="button" class="family-chip ${state.family === 'all' ? 'is-active' : ''}" data-family="all">Todas</button>`, ...keys.map((key) => `<button type="button" class="family-chip ${state.family === key ? 'is-active' : ''}" data-family="${key}">${familyLabel(key)}</button>`)].join('');
  root.querySelectorAll('[data-family]').forEach((button) => button.addEventListener('click', () => {
    state.family = button.dataset.family;
    renderFamilyNavigation();
    renderMaterialsLibrary();
    trackMaterialEvent('materials_family_select', { materials_family: state.family });
  }));
}


function collectionPreview(item) {
  const samples = item.colors.slice(0, 3);
  return `<div class="collection-preview ${samples.length < 3 ? 'is-compact' : ''}">
    <div class="collection-preview-main"><img src="${driveImage(samples[0].id, 760)}" alt="${item.title} · ${samples[0].name}" loading="lazy" decoding="async" class="${imageClass(samples[0])}" /></div>
    <div class="collection-preview-stack">${samples.slice(1).map((color) => `<img src="${driveImage(color.id, 560)}" alt="${item.title} · ${color.name}" loading="lazy" decoding="async" class="${imageClass(color)}" />`).join('')}</div>
  </div>`;
}


function renderCollectionCard(item) {
  return `<a class="collection-card" href="material.html?id=${encodeURIComponent(item.id)}" data-collection-id="${item.id}">
    ${collectionPreview(item)}
    <div class="collection-card-copy">
      <div class="collection-card-meta"><span>${familyLabel(item.family)}</span><span>${item.colors.length} colores</span></div>
      <div class="collection-card-title"><h3>${collectionName(item)}</h3><span aria-hidden="true">↗</span></div>
      <p>${item.description}</p>
    </div>
  </a>`;
}


function renderUpcoming(application) {
  const items = UPCOMING[application] || [];
  return `<section class="upcoming-shell">
    <div class="upcoming-intro"><span class="eyebrow">En preparación</span><h2>${APPLICATIONS[application].title}</h2><p>${APPLICATIONS[application].description}</p></div>
    <div class="upcoming-grid">${items.map(([title, text]) => `<article class="upcoming-card"><div class="upcoming-pattern" aria-hidden="true"></div><span>Próximamente</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
  </section>`;
}


function renderMaterialsLibrary() {
  const root = document.getElementById('materialsLibrary');
  if (!root) return;
  if (state.application !== 'tapiceria') {
    root.innerHTML = renderUpcoming(state.application);
    return;
  }
  const query = state.query.trim().toLowerCase();
  const filtered = MATERIAL_COLLECTIONS.filter((item) => item.application === state.application)
    .filter((item) => state.family === 'all' || item.family === state.family)
    .filter((item) => !query || `${item.title} ${item.description} ${familyLabel(item.family)} ${colorHaystack(item)}`.toLowerCase().includes(query));
  if (!filtered.length) {
    root.innerHTML = `<div class="materials-empty"><strong>No encontramos coincidencias.</strong><p>Probá buscando otra colección, familia o color.</p></div>`;
    return;
  }
  const grouped = {};
  filtered.forEach((item) => { (grouped[item.family] ||= []).push(item); });
  const orderedFamilies = Object.keys(grouped).sort((a, b) => (FAMILY_META[a]?.order || 99) - (FAMILY_META[b]?.order || 99));
  root.innerHTML = orderedFamilies.map((key) => `<section class="collection-family-section">
    <div class="collection-family-heading"><div><span class="eyebrow">Familia</span><h2>${familyLabel(key)}</h2></div><span>${grouped[key].length} ${grouped[key].length === 1 ? 'colección' : 'colecciones'}</span></div>
    <div class="collections-grid">${grouped[key].map(renderCollectionCard).join('')}</div>
  </section>`).join('');
  root.querySelectorAll('[data-collection-id]').forEach((link) => link.addEventListener('click', () => trackMaterialEvent('material_collection_select', { material_collection: link.dataset.collectionId })));
}


function setupMaterialSearch() {
  const input = document.getElementById('materialsSearch');
  if (!input) return;
  input.addEventListener('input', () => {
    state.query = input.value;
    renderMaterialsLibrary();
  });
  input.addEventListener('search', () => { state.query = input.value; renderMaterialsLibrary(); });
}


function findCollection(id) { return MATERIAL_COLLECTIONS.find((item) => item.id === id); }


function renderEssentialSheet(item) {
  const specs = item.specs?.length ? item.specs : [['Familia', familyLabel(item.family)], ['Colores', `${item.colors.length} tonos cargados`]];
  return `<section class="essential-sheet">
    <div class="essential-heading"><span class="eyebrow">Ficha esencial</span><h2>Lo importante, de un vistazo.</h2></div>
    <div class="essential-grid">${specs.map(([label, value]) => `<div class="essential-row"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div>
  </section>`;
}


function renderMaterialDetail() {
  const root = document.getElementById('materialDetail');
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const item = findCollection(params.get('id')) || MATERIAL_COLLECTIONS[0];
  document.title = `${item.title} | Valturi`;
  const intro = item.intro || `${item.title} reúne ${item.colors.length} referencias de color. Explorá cada tono en detalle y usá la ficha como punto de partida para conversar el proyecto con Valturi.`;
  const tags = item.tags || [familyLabel(item.family), `${item.colors.length} colores`];
  const uses = item.uses || ['Tapicería interior', 'Selección de color según proyecto'];
  root.innerHTML = `
    <section class="material-detail-hero">
      <nav class="material-breadcrumb" aria-label="Breadcrumb"><a href="materiales.html">Materiales</a><span>•</span><span>${familyLabel(item.family)}</span><span>•</span><span>${item.title}</span></nav>
      <div class="material-detail-grid">
        <div class="material-detail-copy"><span class="eyebrow">${familyLabel(item.family)}</span><h1>${item.title}</h1><p>${intro}</p><div class="material-tags">${tags.map((tag) => `<span>${tag}</span>`).join('')}</div><div class="material-detail-actions"><a class="material-primary-button" href="${MATERIALS_WHATSAPP}" target="_blank" rel="noreferrer">Consultar por WhatsApp</a><a class="material-secondary-button" href="materiales.html">Volver a materiales</a></div></div>
        ${renderEssentialSheet(item)}
      </div>
    </section>
    <section class="material-colors-section">
      <div class="material-section-heading"><div><span class="eyebrow">Muestrario</span><h2>Colores disponibles</h2><p>Las imágenes ayudan a comparar tono y textura. Para una definición final, recomendamos validar la muestra física porque cada pantalla y tipo de luz puede modificar la percepción del color.</p></div><span class="color-count">${item.colors.length} ${item.colors.length === 1 ? 'color' : 'colores'}</span></div>
      <div class="material-colors-grid">${item.colors.map((color, index) => `<button type="button" class="material-color-card" data-color-index="${index}"><div class="material-color-media"><img src="${driveImage(color.id, 1000)}" alt="${item.title} · ${color.name}" loading="lazy" decoding="async" class="${imageClass(color)}" /></div><div class="material-color-caption"><strong>${color.name}</strong><span>Ver textura</span></div></button>`).join('')}</div>
    </section>
    <section class="material-info-grid"><article class="material-info-card"><span class="eyebrow">Aplicación</span><h3>Usos sugeridos</h3><ul>${uses.map((use) => `<li>${use}</li>`).join('')}</ul></article><article class="material-info-card"><span class="eyebrow">Referencia de color</span><h3>La luz también es parte del material.</h3><p>Los tonos oscuros pueden verse más claros bajo sol directo. Para esas referencias conviene sumar una segunda toma sin incidencia directa de sol y validar el tono final con la muestra física.</p></article></section>
    <section class="material-future-grid"><article class="material-future-card"><span class="eyebrow">Próxima capa</span><h3>Aplicado en proyectos</h3><p>Esta sección queda preparada para sumar trabajos reales de Valturi realizados con cada colección y, cuando corresponda, con el tono exacto.</p></article>${item.performanceNote ? `<article class="material-future-card"><span class="eyebrow">Performance</span><h3>Propiedades en acción</h3><p>${item.performanceNote}</p></article>` : ''}</section>
    <div class="material-lightbox" id="materialLightbox" aria-hidden="true"><div class="material-lightbox-panel"><div class="material-lightbox-head"><div><strong id="materialLightboxTitle"></strong><span>Vista completa y acercamiento de textura</span></div><button type="button" class="material-lightbox-close" aria-label="Cerrar">×</button></div><div class="material-lightbox-views"><figure><figcaption>Vista completa</figcaption><div class="lightbox-image-stage"><img id="materialLightboxMain" src="" alt="" /></div></figure><figure><figcaption>Detalle 2×</figcaption><div class="lightbox-image-stage is-detail"><img id="materialLightboxZoom" src="" alt="" /></div></figure></div><p class="material-lightbox-note">El tono puede variar según pantalla, iluminación y partida del material.</p></div></div>`;
  setupMaterialLightbox(item);
}


function setupMaterialLightbox(item) {
  const lightbox = document.getElementById('materialLightbox');
  if (!lightbox) return;
  const title = document.getElementById('materialLightboxTitle');
  const main = document.getElementById('materialLightboxMain');
  const zoom = document.getElementById('materialLightboxZoom');
  const closeButton = lightbox.querySelector('.material-lightbox-close');
  const close = () => { lightbox.classList.remove('is-open'); lightbox.setAttribute('aria-hidden', 'true'); document.body.classList.remove('material-modal-open'); };
  document.querySelectorAll('[data-color-index]').forEach((button) => button.addEventListener('click', () => {
    const color = item.colors[Number(button.dataset.colorIndex)];
    const src = driveImage(color.id, 1800);
    title.textContent = `${color.name} · ${item.title}`;
    main.src = src; zoom.src = src;
    main.alt = `${item.title} · ${color.name}`; zoom.alt = `Detalle ampliado ${item.title} · ${color.name}`;
    main.className = imageClass(color); zoom.className = imageClass(color, true);
    lightbox.classList.add('is-open'); lightbox.setAttribute('aria-hidden', 'false'); document.body.classList.add('material-modal-open');
    trackMaterialEvent('material_color_view', { material_collection: item.id, material_color: color.name });
  }));
  closeButton?.addEventListener('click', close);
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
}


window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('materialPortals')) {
    renderApplicationPortals(); renderFamilyNavigation(); renderMaterialsLibrary(); setupMaterialSearch();
  }
  if (document.getElementById('materialDetail')) renderMaterialDetail();
});