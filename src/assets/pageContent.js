export const heroImages = {
  default: 'https://source.unsplash.com/random/1600x900/?fitness,training',
  clinic: 'https://source.unsplash.com/random/1600x900/?physiotherapy,clinic',
  studio: 'https://source.unsplash.com/random/1600x900/?gym,training',
  movement: 'https://source.unsplash.com/random/1600x900/?movement,athlete'
};

export const pageContent = {
  treinamento: {
    hero: {
      title: 'Treinamento',
      subtitle: 'Metodologia integrada',
      description:
        'Transferimos o aprendizado motor para o dia a dia e para o desempenho esportivo com exercícios que unem força e coordenação.',
      backgroundImage: heroImages.studio
    },
    sections: [
      {
        title: 'Aprendizagem motora viva',
        paragraphs: [
          'No Virya temos por objetivo promover a transferência do treinamento para o bem-estar cotidiano e o desempenho esportivo. O foco das aulas é desenvolver aprendizagem motora através de exercícios que associam força e coordenação para que nossos alunos encarem as demandas do dia-a-dia.',
          'Acreditamos que o corpo é um sistema de aprendizagem extremamente responsivo e capaz de resolver problemas. A hierarquia clássica do cérebro como regente é substituída por uma inteligência integrada ao corpo, inspirada pela teoria ecológica e pelos estudos de sistemas complexos.'
        ]
      },
      {
        title: 'Tecnologias e avaliações',
        paragraphs: [
          'Utilizamos tecnologias e equipamentos Flywheel Training para explorar exercícios iso e semi-isométricos com cargas isoinerciais. Plataformas de força e acelerômetros complementam o acompanhamento longitudinal e demonstram a eficácia do treinamento.'
        ],
        list: [
          'Sistemas complexos aplicados à força e coordenação',
          'Teoria ecológica da percepção e ação guiando o design das aulas',
          'Aprendizagem diferencial para orientar comandos e feedbacks',
          'Equipamentos Flywheel e plataformas de isometria',
          'Avaliação longitudinal com sensores acessíveis'
        ]
      }
    ]
  },
  fisioterapia: {
    hero: {
      title: 'Fisioterapia Integrada',
      subtitle: 'Abordagem global',
      description:
        'Integramos biomecânica, controle motor e tecnologias de avaliação para tratar dores e devolver autonomia.',
      backgroundImage: heroImages.clinic
    },
    sections: [
      {
        title: 'Avaliar o corpo como um todo',
        paragraphs: [
          'A fisioterapia do Virya considera postura, morfologia, histórico de atividade física e padrões de movimento para entender porque a dor aparece. Buscamos causas, não apenas sintomas, e criamos planos personalizados.',
          'Combinamos terapia manual, mobilizações articulares, fortalecimento com sobrecarga mecânica e orientações sobre hábitos para prolongar os ganhos obtidos durante as sessões.'
        ]
      },
      {
        title: 'Recursos utilizados',
        list: [
          'Avaliação biomecânica funcional',
          'Terapias manuais especializadas',
          'Treinamento de controle motor e estabilidade',
          'Equipamentos isoinerciais e plataformas de força',
          'Acompanhamento longitudinal para prevenir recidivas'
        ]
      }
    ]
  },
  osteopatia: {
    hero: {
      title: 'Osteopatia',
      subtitle: 'Equilíbrio estrutural',
      description:
        'Aplicamos princípios osteopáticos para melhorar mobilidade, regular o sistema nervoso autônomo e promover saúde integral.',
      backgroundImage: heroImages.default
    },
    sections: [
      {
        title: 'Princípios osteopáticos',
        paragraphs: [
          'Consideramos corpo, mente e ambiente como um sistema integrado. Técnicas manuais específicas restauram movimentos articulares, reduzem tensões fasciais e melhoram a vascularização.',
          'Os protocolos combinam avaliação detalhada com técnicas suaves para que o corpo reencontre equilíbrio e adaptação às demandas diárias.'
        ]
      }
    ]
  }
};
