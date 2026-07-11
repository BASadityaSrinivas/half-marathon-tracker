// ============================================================
//  THE ONLY PLACE THE MENU LIVES.
//  diet.html (daily view, English) and diet-print.html (amma's A4, Tamil)
//  both read from here.
//
//  Each entry is  [ english, tamil ]  — edit both together.
//  carb has a 3rd slot: the PORTION. Only diet.html shows it;
//  amma's print sheet never shows cups or sizes.
// ============================================================
const V = {
  millet: {
    Mon:['Ragi kanji',              'ராகி கஞ்சி'],
    Tue:['Kambu kanji',             'கம்பு கஞ்சி'],
    Wed:['Ragi kali',               'ராகி களி'],
    Thu:['Kambu kanji',             'கம்பு கஞ்சி'],
    Fri:['Ragi kanji',              'ராகி கஞ்சி'],
    Sat:['Kambu kanji',             'கம்பு கஞ்சி'],
    Sun:['Ragi kali',               'ராகி களி']
  },
  sundal: {
    Mon:['Green gram',              'பச்சை பயறு'],
    Tue:['Chickpea',                'கொண்டைக்கடலை'],
    Wed:['Peas',                    'பட்டாணி'],
    Thu:['Peanut',                  'வேர்க்கடலை'],
    Fri:['Kollu (horse gram)',      'கொள்ளு'],
    Sat:['Chickpea',                'கொண்டைக்கடலை'],
    Sun:['Green gram',              'பச்சை பயறு']
  },
  carb: {
    Mon:['Rice',                    'சாதம்',                                        '1 level cup'],
    Tue:['Rice',                    'சாதம்',                                        '1 level cup'],
    Wed:['Potato poriyal — no rice','உருளைக்கிழங்கு பொரியல் — சாதம் வேண்டாம்',      '1 cup'],
    Thu:['Rice',                    'சாதம்',                                        '1 level cup'],
    Fri:['Rice',                    'சாதம்',                                        '1 level cup'],
    Sat:['🎉 FREE MEAL',            '🎉 விருப்ப உணவு',                              ''],
    Sun:['Rice',                    'சாதம்',                                        '¾ cup']
  },
  veg: {
    Mon:['Beetroot poriyal',        'பீட்ரூட் பொரியல்'],
    Tue:['Cabbage poriyal',         'முட்டைகோஸ் பொரியல்'],
    Wed:['Beans + carrot poriyal',  'பீன்ஸ் + கேரட் பொரியல்'],
    Thu:['Raw banana (vazhakkai)',  'வாழைக்காய் பொரியல்'],
    Fri:['Vendakkai poriyal',       'வெண்டைக்காய் பொரியல்'],
    Sat:['—',                       '—'],
    Sun:['Cabbage poriyal',         'முட்டைகோஸ் பொரியல்']
  },
  extra: {
    Mon:['+ Keerai',                '+ கீரை'],
    Tue:['—',                       '—'],
    Wed:['+ Paneer',                '+ பன்னீர்'],
    Thu:['+ Keerai',                '+ கீரை'],
    Fri:['+ Paneer',                '+ பன்னீர்'],
    Sat:['—',                       '—'],
    Sun:['+ Keerai',                '+ கீரை']
  }
};
const TYPE = {Mon:'training',Tue:'training',Wed:'training',Thu:'training',Fri:'training',Sat:'long',Sun:'rest'};
