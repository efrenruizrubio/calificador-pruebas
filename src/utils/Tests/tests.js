export const tests = [
  {
    id: 1,
    name: 'Inventario de Depresión de Beck (BDI-2)',
    instructions: '',
    questions: [
      { question: 'Tristeza', answers: [{ value: 0, option: 'No me siento triste' }, { value: 1, option: 'Me siento triste gran parte del tiempo' }, { value: 2, option: 'Me siento triste todo el tiempo' }, { value: 3, option: 'Me siento tan triste o soy tan infeliz que no puedo soportarlo' }], index: 1 },
      { question: 'Pesimismo', answers: [{ value: 0, option: 'No estoy desalentado respecto del mí futuro' }, { value: 1, option: 'Me siento más desalentado respecto de mi futuro que lo que solía estarlo' }, { value: 2, option: 'No espero que las cosas funcionen para mí' }, { value: 3, option: 'Siento que no hay esperanza para mi futuro y que sólo puede empeorar' }], index: 2 },
      { question: 'Fracaso', answers: [{ value: 0, option: 'No me siento como un fracasado' }, { value: 1, option: 'He fracasado más de lo que hubiera debido' }, { value: 2, option: 'Cuando miro hacia atrás, veo muchos fracasos' }, { value: 3, option: 'Siento que como persona soy un fracaso total' }], index: 3 },
      { question: 'Pérdida de Placer', answers: [{ value: 0, option: 'Obtengo tanto placer como siempre por las cosas de las que disfruto' }, { value: 1, option: 'No disfruto tanto de las cosas como solía hacerlo' }, { value: 2, option: 'Obtengo muy poco placer de las cosas que solía disfrutar' }, { value: 3, option: 'No puedo obtener ningún placer de las cosas de las que solía disfrutar' }], index: 4 },
      { question: 'Sentimientos de Culpa', answers: [{ value: 0, option: 'No me siento particularmente culpable' }, { value: 1, option: 'Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho' }, { value: 2, option: 'Me siento bastante culpable la mayor parte del tiempo' }, { value: 3, option: 'Me siento culpable todo el tiempo' }], index: 5 },
      { question: 'Sentimientos de Castigo', answers: [{ value: 0, option: 'No siento que este siendo castigado' }, { value: 1, option: 'Siento que tal vez pueda ser castigado' }, { value: 2, option: 'Espero ser castigado' }, { value: 3, option: 'Siento que estoy siendo castigado' }], index: 6 },
      { question: 'Disconformidad con uno mismo', answers: [{ value: 0, option: 'Siento acerca de mi lo mismo que siempre' }, { value: 1, option: 'He perdido la confianza en mí mismo' }, { value: 2, option: 'Estoy decepcionado conmigo mismo' }, { value: 3, option: 'No me gusto a mí mismo' }], index: 7 },
      { question: 'Autocrítica', answers: [{ value: 0, option: 'No me critico ni me culpo más de lo habitual' }, { value: 1, option: 'Estoy más crítico conmigo mismo de lo que solía estarlo' }, { value: 2, option: 'Me critico a mí mismo por todos mis errores' }, { value: 3, option: 'Me culpo a mí mismo por todo lo malo que sucede' }], index: 8 },
      { question: 'Pensamientos o Deseos Suicidas', answers: [{ value: 0, option: 'No tengo ningún pensamiento de matarme' }, { value: 1, option: 'He tenido pensamientos de matarme, pero no lo haría' }, { value: 2, option: 'Querría matarme' }, { value: 3, option: 'Me mataría si tuviera la oportunidad de hacerlo' }], index: 9 },
      { question: 'Llanto', answers: [{ value: 0, option: 'No lloro más de lo que solía hacerlo' }, { value: 1, option: 'Lloro más de lo que solía hacerlo' }, { value: 2, option: 'Lloro por cualquier pequeñez' }, { value: 3, option: 'Siento ganas de llorar pero no puedo' }], index: 10 },
      { question: 'Agitación', answers: [{ value: 0, option: 'No estoy más inquieto o tenso que lo habitual' }, { value: 1, option: 'Me siento más inquieto o tenso que lo habitual' }, { value: 2, option: 'Estoy tan inquieto o agitado que me es difícil quedarme quieto' }, { value: 3, option: 'Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo' }], index: 11 },
      { question: 'Pérdida de Interés', answers: [{ value: 0, option: 'No he perdido el interés en otras actividades o personas' }, { value: 1, option: 'Estoy menos interesado que antes en otras personas o cosas' }, { value: 2, option: 'He perdido casi todo el interés en otras personas o cosas' }, { value: 3, option: 'Me es difícil interesarme por algo' }], index: 12 },
      { question: 'Indecisión', answers: [{ value: 0, option: 'Tomo mis propias decisiones tan bien como siempre' }, { value: 1, option: 'Me resulta más difícil que de costumbre tomar decisiones' }, { value: 2, option: 'Encuentro mucha más dificultad que antes para tomar decisiones' }, { value: 3, option: 'Tengo problemas para tomar cualquier decisión' }], index: 13 },
      { question: 'Desvalorización', answers: [{ value: 0, option: 'No siento que yo no sea valioso' }, { value: 1, option: 'No me considero a mi mismo tan valioso y útil como solía considerarme' }, { value: 2, option: 'Me siento menos valioso cuando me comparo con otros' }, { value: 3, option: 'Siento que no valgo nada' }], index: 14 },
      { question: 'Pérdida de Energía', answers: [{ value: 0, option: 'Tengo tanta energía como siempre' }, { value: 1, option: 'Tengo menos energía que la que solía tener' }, { value: 2, option: 'No tengo suficiente energía para hacer demasiado' }, { value: 3, option: 'No tengo energía suficiente para hacer nada' }], index: 15 },
      { question: 'Cambios en los Hábitos de Sueño', answers: [{ value: 0, option: 'No he experimentado ningún cambio en mis hábitos de sueño' }, { value: 1, option: 'Duermo un poco más que lo habitual | Duermo un poco menos que lo habitual' }, { value: 2, option: 'Duermo mucho más que lo habitual | Duermo mucho menos que lo habitual' }, { value: 3, option: 'Duermo la mayor parte del día | Me despierto 1-2 horas más temprano y no puedo volver a dormirme' }], index: 16 },
      { question: 'Irritabilidad', answers: [{ value: 0, option: 'No estoy tan irritable que lo habitual' }, { value: 1, option: 'Estoy más irritable que lo habitual' }, { value: 2, option: 'Estoy mucho más irritable que lo habitual' }, { value: 3, option: 'Estoy irritable todo el tiempo' }], index: 17 },
      { question: 'Cambios en el Apetito', answers: [{ value: 0, option: 'No he experimentado ningún cambio en mi apetito' }, { value: 1, option: 'Mi apetito es un poco menor que lo habitual | Mi apetito es un poco mayor que lo habitual' }, { value: 2, option: 'Mi apetito es mucho menor que antes | Mi apetito es mucho mayor que lo habitual' }, { value: 3, option: 'No tengo apetito en absoluto | Quiero comer todo el día' }], index: 18 },
      { question: 'Dificultad de Concentración', answers: [{ value: 0, option: 'Puedo concentrarme tan bien como siempre' }, { value: 1, option: 'No puedo concentrarme tan bien como habitualmente' }, { value: 2, option: 'Me es difícil mantener la mente en algo por mucho tiempo' }, { value: 3, option: 'Encuentro que no puedo concentrarme en nada' }], index: 19 },
      { question: 'Cansancio o Fatiga', answers: [{ value: 0, option: 'No estoy más cansado o fatigado que lo habitual' }, { value: 1, option: 'Me fatigo o me canso más fácilmente que lo habitual' }, { value: 2, option: 'Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer' }, { value: 3, option: 'Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer' }], index: 20 },
      { question: 'Pérdida de Interés en el Sexo', answers: [{ value: 0, option: 'No he notado ningún cambio reciente en mi interés por el sexo' }, { value: 1, option: 'Estoy menos interesado en el sexo de lo que solía estarlo' }, { value: 2, option: 'Estoy mucho menos interesado en el sexo' }, { value: 3, option: 'He perdido completamente el interés en el sexo' }], index: 21 }
    ],
    inputs: [
      { label: 'Estado Civil', type: 'text', name: 'maritalStatus', error: 'Necesita añadir estado civil' },
      { label: 'Ocupación', type: 'text', name: 'occupation', error: 'Necesita añadir ocupación' },
      { label: 'Educación', type: 'text', name: 'scholarship', error: 'Necesita añadir escolaridad' }
    ]
  },
  {
    id: 2,
    name: 'Inventario de síntomas SCL-90-R de L. Derogatis',
    instructions: '',
    questions: [
      { question: 'Dolores de cabeza', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 1, section: 'SOM' },
      { question: 'Nerviosismo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 2, section: 'ANS' },
      { question: 'Pensamientos desagradables que no se iban de mi cabeza', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 3, section: 'OBS' },
      { question: 'Sensación de mareo o desmayo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 4, section: 'SOM' },
      { question: 'Falta de interés en relaciones sexuales', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 5, section: 'DEP' },
      { question: 'Criticar a los demás', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 6, section: 'SI' },
      { question: 'Sentir que otro puede controlar mis pensamientos', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 7, section: 'PSIC' },
      { question: 'Sentir que otros son culpables de lo que me pasa', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 8, section: 'PAR' },
      { question: 'Tener dificultad para memorizar cosas', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 9, section: 'OBS' },
      { question: 'Estar preocupado/a por mi falta de ganas para hacer algo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 10, section: 'OBS' },
      { question: 'Sentirme enojado/a, malhumorado/a', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 11, section: 'HOS' },
      { question: 'Dolores en el pecho', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 12, section: 'SOM' },
      { question: 'Miedo a los espacios abiertos o las calles', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 13, section: 'FOB' },
      { question: 'Sentirme con muy pocas energías', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 14, section: 'DEP' },
      { question: 'Pensar en quitarme la vida', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 15, section: 'DEP' },
      { question: 'Escuchar voces que otras personas no oyen', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 16, section: 'PSIC' },
      { question: 'Temblores en mi cuerpo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 17, section: 'ANS' },
      { question: 'Perder la confianza en la mayoría de las personas', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 18, section: 'PAR' },
      { question: 'No tener ganas de comer', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 19, section: 'ADICIONAL' },
      { question: 'Llorar por cualquier cosa', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 20, section: 'DEP' },
      { question: 'Sentirme incómodo/a con personas del otro sexo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 21, section: 'SI' },
      { question: 'Sentirme atrapada/o o encerrado/a', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 22, section: 'DEP' },
      { question: 'Asustarme de repente sin razón alguna', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 23, section: 'ANS' },
      { question: 'Explotar y no poder controlarme', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 24, section: 'HOS' },
      { question: 'Tener miedo a salir solo/a de mi casa', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 25, section: 'FOB' },
      { question: 'Sentirme culpable por cosas que ocurren', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 26, section: 'DEP' },
      { question: 'Dolores en la espalda', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 27, section: 'SOM' },
      { question: 'No poder terminar las cosas que empecé a hacer', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 28, section: 'OBS' },
      { question: 'Sentirme solo/a', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 29, section: 'DEP' },
      { question: 'Sentirme triste', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 30, section: 'DEP' },
      { question: 'Preocuparme demasiado por todo lo que pasa', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 31, section: 'DEP' },
      { question: 'No tener interés por nada', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 32, section: 'DEP' },
      { question: 'Tener miedos', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 33, section: 'ANS' },
      { question: 'Sentirme herido en mis sentimientos', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 34, section: 'SI' },
      { question: 'Creer que la gente sabe qué estoy pensando', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 35, section: 'PSIC' },
      { question: 'Sentir que no me comprenden', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 36, section: 'SI' },
      { question: 'Sentir que no caigo bien a la gente, que no les gusto', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 37, section: 'SI' },
      { question: 'Tener que hacer las cosas muy despacio para estar seguro/a de que están bien hechas', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 38, section: 'OBS' },
      { question: 'Mi corazón late muy fuerte, se acelera', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 39, section: 'ANS' },
      { question: 'Náuseas o dolor de estómago', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 40, section: 'SOM' },
      { question: 'Sentirme inferior a los demás', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 41, section: 'SI' },
      { question: 'Calambres en manos, brazos o piernas', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 42, section: 'SOM' },
      { question: 'Sentir que me vigilan o que hablan de mí', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 43, section: 'PAR' },
      { question: 'Tener problemas para dormirme', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 44, section: 'ADICIONAL' },
      { question: 'Tener que controlar una o más veces lo que hago', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 45, section: 'OBS' },
      { question: 'Tener dificultades para tomar decisiones', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 46, section: 'OBS' },
      { question: 'Tener miedo de viajar en tren, ómnibus o subterráneos', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 47, section: 'FOB' },
      { question: 'Tener dificultades para respirar bien', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 48, section: 'SOM' },
      { question: 'Ataques de frío o de calor', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 49, section: 'SOM' },
      { question: 'Tener que evitar acercarme a algunos lugares o actividades porque me dan miedo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 50, section: 'FOB' },
      { question: 'Sentir que mi mente queda en blanco', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 51, section: 'OBS' },
      { question: 'Hormigueos en alguna parte del cuerpo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 52, section: 'SOM' },
      { question: 'Tener un nudo en la garganta', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 53, section: 'SOM' },
      { question: 'Perder las esperanzas en el futuro', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 54, section: 'DEP' },
      { question: 'Dificultades para concentrarme en lo que estoy haciendo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 55, section: 'OBS' },
      { question: 'Sentir flojedad, debilidad, en partes de mi cuerpo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 56, section: 'SOM' },
      { question: 'Sentirme muy nervioso/a, agitado/a', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 57, section: 'ANS' },
      { question: 'Sentir mis brazos y piernas muy pesados', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 58, section: 'SOM' },
      { question: 'Pensar que me estoy por morir', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 59, section: 'ADICIONAL' },
      { question: 'Comer demasiado', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 60, section: 'ADICIONAL' },
      { question: 'Sentirme incómodo/a cuando me miran o hablan de mí', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 61, section: 'SI' },
      { question: 'Tener ideas, pensamientos que no son los míos', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 62, section: 'PSIC' },
      { question: 'Necesitar golpear o lastimar a alguien', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 63, section: 'HOS' },
      { question: 'Despertarme muy temprano por la mañana sin necesidad', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 64, section: 'ADICIONAL' },
      { question: 'Repetir muchas veces algo que hago: contar, lavarme, tocar cosas', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 65, section: 'OBS' },
      { question: 'Dormir con problemas, muy inquieto/a', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 66, section: 'ADICIONAL' },
      { question: 'Necesitar romper o destrozar cosas', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 67, section: 'HOS' },
      { question: 'Tener ideas, pensamientos que los demás no entienden', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 68, section: 'PAR' },
      { question: 'Estar muy pendiente de lo que los demás pueden pensar de mí', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 69, section: 'SI' },
      { question: 'Sentirme incómodo/a en lugares donde hay mucha gente', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 70, section: 'FOB' },
      { question: 'Sentir que todo me cuesta mucho esfuerzo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 71, section: 'DEP' },
      { question: 'Tener ataques de mucho miedo o de pánico', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 72, section: 'ANS' },
      { question: 'Sentirme mal si estoy comiendo o bebiendo en público', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 73, section: 'SI' },
      { question: 'Meterme muy seguido en discusiones', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 74, section: 'HOS' },
      { question: 'Ponerme nervioso/a cuando estoy solo/a', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 75, section: 'FOB' },
      { question: 'Sentir que los demás no me valoran como merezco', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 76, section: 'PAR' },
      { question: 'Sentirme solo/a aún estando con gente', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 77, section: 'PSIC' },
      { question: 'Estar inquieto/a; no poder estar sentado/a sin moverme', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 78, section: 'ANS' },
      { question: 'Sentirme un/a inútil', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 79, section: 'DEP' },
      { question: 'Sentir que algo malo me va a pasar', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 80, section: 'ANS' },
      { question: 'Gritar o tirar cosas', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 81, section: 'HOS' },
      { question: 'Miedo a desmayarme en medio de la gente', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 82, section: 'FOB' },
      { question: 'Sentir que se aprovechan de mí si los dejo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 83, section: 'PAR' },
      { question: 'Pensar cosas sobre el sexo que me molestan', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 84, section: 'PSIC' },
      { question: 'Sentir que debo ser castigado/a por mis pecados', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 85, section: 'PSIC' },
      { question: 'Tener imágenes y pensamientos que me dan miedo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 86, section: 'ANS' },
      { question: 'Sentir que algo anda mal en mi cuerpo', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 87, section: 'PSIC' },
      { question: 'Sentirme alejado/a de las demás personas', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 88, section: 'PSIC' },
      { question: 'Sentirme culpable', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 89, section: 'ADICIONAL' },
      { question: 'Pensar que en mi cabeza hay algo que no funciona bien', answers: [{ value: 0, option: 'Nada' }, { value: 1, option: 'Muy poco' }, { value: 2, option: 'Poco' }, { value: 3, option: 'Bastante' }, { value: 4, option: 'Mucho' }], index: 90, section: 'PSIC' }
    ],
    inputs: [
      { label: 'Educación', type: 'select', name: 'scholarship', error: 'Necesita añadir escolaridad', options: ['Primaria incompleta', 'Primaria completa', 'Secundaria incompleta', 'Secundaria completa', 'Preparatoria incompleta', 'Preparatoria/Universidad completa'] },
      { label: 'Estado Civil', type: 'select', name: 'maritalStatus', error: 'Necesita escoger estado civil', options: ['Soltero', 'Casado', 'Divorciado', 'Separado', 'Viudo/a', 'En pareja'] },
      { label: 'Ocupación', type: 'text', name: 'occupation', error: 'Necesita añadir ocupación' },
      { label: 'Lugar de nacimiento', type: 'text', name: 'birthPlace', error: 'Necesita añadir lugar de nacimiento' },
      { label: 'Lugar de residencia actual', type: 'text', name: 'actualResidencePlace', error: 'Necesita añadir lugar de residencia actual' }
    ]
  },
  {
    id: 3,
    name: 'Inventario de Ansiedad de Beck',
    instructions: '',
    questions: [
      { question: 'Torpe o entumecido', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 1 },
      { question: 'Acalorado', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 2 },
      { question: 'Con temblor en las piernas', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 3 },
      { question: 'Incapaz de relajarse', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 4 },
      { question: 'Con temor a que ocurra lo peor', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 5 },
      { question: 'Mareado, o que se le va la cabeza', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 6 },
      { question: 'Con latidos del corazón fuertes y acelerados', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 7 },
      { question: 'Inestable', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 8 },
      { question: 'Atemorizado o asustado', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 9 },
      { question: 'Nervioso', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 10 },
      { question: 'Con sensación de bloqueo', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 11 },
      { question: 'Con temblores en las manos', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 12 },
      { question: 'Inquieto, inseguro', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 13 },
      { question: 'Con miedo a perder el control', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 14 },
      { question: 'Con sensación de ahogo', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 15 },
      { question: 'Con temor a morir', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 16 },
      { question: 'Con miedo', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 17 },
      { question: 'Con problemas digestivos', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 18 },
      { question: 'Con desvanecimientos', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 19 },
      { question: 'Con rubor facial', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 20 },
      { question: 'Con sudores, fríos o calientes', answers: [{ value: 0, option: 'No en absoluto' }, { value: 1, option: 'Levemente' }, { value: 2, option: 'Moderadamente' }, { value: 3, option: 'Severamente' }], index: 21 }
    ],
    inputs: []
  },
  {
    id: 4,
    instructions: '',
    name: 'Medición de Adicción al Sexo',
    questions: [],
    inputs: [
      { label: 'Ciudad de residencia', type: 'text', name: 'residentialCity', error: 'Necesita añadir ciudad de residencia' },
      { label: 'País de nacimiento', type: 'text', name: 'birthPlace', error: 'Necesita añadir país de nacimiento' },
      { label: 'Estado Civil', type: 'text', name: 'maritalStatus', error: 'Necesita añadir estado civil' },
      { label: 'Nivel educativo', type: 'select', name: 'scholarship', options: ['Sin estudio', 'Primaria', 'Bachillerato', 'Técnico', 'Tecnólogo', 'Pregrado Universitario', 'Estudios de Posgrado'], error: 'Necesita añadir nivel educativo' },
      { label: 'Religión a la que pertenece', type: 'select', name: 'religion', options: ['Cristiana', 'Católica', 'Budista', 'Islámica', 'Pentacostal', 'Ninguna', 'Otra'], error: 'Necesita añadir religión' },
      { label: '¿Tiene pareja actualmente?', type: 'radio', name: 'actualCouple', options: [{ value: true, option: 'Sí' }, { value: false, option: 'No' }] },
      { label: '¿Tiene pareja estable?', type: 'radio', name: 'stableCouple', options: [{ value: true, option: 'Sí' }, { value: false, option: 'No' }] },
      { label: 'Número de parejas sexuales', type: 'text', name: 'numberCouples', error: 'Necesita añadir número de parejas' },
      { label: '¿Has tenido relaciones sexuales (sexo oral, vaginal, anal y/o masturbación mutua)?', type: 'radio', name: 'hasSexualRelations', options: [{ value: true, option: 'Sí' }, { value: false, option: 'No' }] },
      { label: '¿Con cuantas personas has tenido relaciones sexuales con penetración en los últimos 6 meses con condón?', type: 'text', name: 'protectedSexualRelations', error: 'Necesita añadir número de personas' },
      { label: '¿Con cuantas personas has tenido relaciones sexuales con penetración en los últimos 6 meses sin condón?', type: 'text', name: 'unprotectedSexualRelations', error: 'Necesita añadir número de personas' },
      { label: 'Condón', type: 'radio', name: 'protectionMethodsCondom', options: [{ value: true, option: 'Sí' }, { value: false, option: 'No' }], specialText: '¿En tus relaciones sexuales con penetración utilizas alguno de los siguientes métodos de protección? Por favor marque la casilla correspondiente y con una X señale el porcentaje de uso del método de protección. ' }
    ]
  },
  {
    id: 5,
    name: '',
    instructions: '',
    questions: [],
    inputs: []
  }
]
