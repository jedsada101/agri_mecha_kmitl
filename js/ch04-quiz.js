/* ==========================================================================
   Chapter 4 — pre-test and post-test items
   Item-writing rules used here, and to be used for every chapter:
     - every option is parallel in grammatical form and similar in length, so
       the key cannot be spotted by its shape alone
     - every distractor encodes a misconception students actually hold
     - items ask the learner to trace, diagnose, compute or choose a design,
       not to recall a definition
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch04-pre', {
  type: 'pre',
  chapter: 'ch04',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 4', en: 'Pre-test — Chapter 4' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการวิเคราะห์สถานการณ์ ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around situations rather than definitions. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'โรงเพาะเห็ดแห่งหนึ่งมีสี่ระบบทำงานพร้อมกัน ระบบใดที่ตัวแปรทั้งหมดเป็นค่าไม่ต่อเนื่อง จึงออกแบบด้วยการควบคุมลำดับได้ตรงที่สุด',
        en: 'A mushroom house runs four systems at once. In which one are all the variables discrete, making it the natural fit for sequence control?'
      },
      options: [
        { th: 'พัดลมที่เร่งรอบขึ้นตามความเข้มข้นของ CO₂ ที่วัดได้', en: 'A fan whose speed rises with the measured CO₂ concentration' },
        { th: 'วาล์วพ่นหมอกที่เปิด 30 วินาที แล้วปิด 10 นาที สลับกันไป', en: 'A misting valve that opens for 30 s then closes for 10 min, alternately' },
        { th: 'ฮีตเตอร์ที่ปรับกำลังตามผลต่างอุณหภูมิจากค่าเป้าหมาย', en: 'A heater whose power follows the gap between temperature and target' },
        { th: 'ปั๊มจ่ายน้ำที่ปรับอัตราการไหลตามความชื้นของวัสดุเพาะ', en: 'A pump that trims its flow rate to the substrate moisture' }
      ],
      answer: 1,
      explain: {
        th: 'สามข้อที่เหลือล้วนมีตัวแปรต่อเนื่อง (รอบพัดลม กำลังฮีตเตอร์ อัตราการไหล) ซึ่งต้องถามว่า “ปรับมากแค่ไหน” ส่วนวาล์วพ่นหมอกมีเพียงเปิดหรือปิด และคำถามคือ “ถึงเวลาเปลี่ยนขั้นหรือยัง” ซึ่งเป็นงานควบคุมลำดับ',
        en: 'The other three carry continuous variables — fan speed, heater power, flow rate — and ask “how much?”. The misting valve is only open or closed, and the question is “is it time for the next step?”, which is sequence control.'
      }
    },
    {
      q: {
        th: 'วงจรอนุญาตให้สายพานเดินเขียนว่า \\( Y = G \\cdot \\overline{E} \\cdot (F + M) \\) โดย \\( G \\) = ฝาครอบปิด, \\( E \\) = กดหยุดฉุกเฉิน, \\( F \\) = มีผลไม้, \\( M \\) = โหมดบำรุงรักษา สถานการณ์ใดที่สายพานเดินได้',
        en: 'A conveyor permissive is \\( Y = G \\cdot \\overline{E} \\cdot (F + M) \\), where \\( G \\) = guard closed, \\( E \\) = E-stop pressed, \\( F \\) = fruit present, \\( M \\) = maintenance mode. In which situation does the conveyor run?'
      },
      options: [
        { th: 'ฝาครอบปิดอยู่ มีคนกดหยุดฉุกเฉินไว้ มีผลไม้ในฮอปเปอร์ เปิดโหมดบำรุงรักษาไว้', en: 'Guard closed, E-stop held in, fruit in the hopper, maintenance mode on' },
        { th: 'ฝาครอบเปิดอยู่ ไม่มีใครกดหยุดฉุกเฉิน ฮอปเปอร์ว่าง เปิดโหมดบำรุงรักษาไว้', en: 'Guard open, no E-stop pressed, hopper empty, maintenance mode on' },
        { th: 'ฝาครอบเปิดอยู่ ไม่มีใครกดหยุดฉุกเฉิน มีผลไม้ในฮอปเปอร์ ไม่ได้เปิดโหมดบำรุงรักษา', en: 'Guard open, no E-stop pressed, fruit in the hopper, maintenance mode off' },
        { th: 'ฝาครอบปิดอยู่ ไม่มีใครกดหยุดฉุกเฉิน ฮอปเปอร์ว่าง เปิดโหมดบำรุงรักษาไว้', en: 'Guard closed, no E-stop pressed, hopper empty, maintenance mode on' }
      ],
      answer: 3,
      explain: {
        th: '\\( G \\) และ \\( \\overline{E} \\) คูณอยู่นอกวงเล็บ จึงต้องเป็นจริงทั้งคู่ทุกกรณี ส่วนในวงเล็บเป็น OR ดังนั้นโหมดบำรุงรักษาแทนการมีผลไม้ได้ ตัวเลือกที่ผิดสองข้อติดที่ฝาครอบเปิด และอีกข้อติดที่กดหยุดฉุกเฉิน',
        en: '\\( G \\) and \\( \\overline{E} \\) are factors outside the bracket, so both must hold in every case. Inside the bracket is an OR, so maintenance mode can substitute for fruit. Two wrong options fail on the open guard, the third on the held E-stop.'
      }
    },
    {
      q: {
        th: 'ปุ่มหยุดฉุกเฉินในตู้ควบคุมหนึ่งถูกเดินสายเป็นหน้าสัมผัสปกติเปิด (NO) โดยช่างที่ไม่คุ้นมาตรฐาน ผลที่ตามมาคือข้อใด',
        en: 'An E-stop has been wired as a normally-open contact by a technician unfamiliar with the standard. What follows from that?'
      },
      options: [
        { th: 'เครื่องจะยังเดินต่อได้แม้สายสัญญาณขาด เพราะสัญญาณที่หายไปดูเหมือนไม่มีใครกดปุ่ม', en: 'The machine keeps running even with a broken wire, because the absent signal looks like nobody pressed it' },
        { th: 'เครื่องจะตอบสนองต่อการกดปุ่มช้าลงประมาณหนึ่งรอบสแกนเมื่อเทียบกับแบบปกติปิด', en: 'The machine responds to the button about one scan later than it would with a closed contact' },
        { th: 'เครื่องจะทำงานเหมือนเดิมทุกประการ เพียงต้องกลับลอจิกในโปรแกรมให้ตรงกับการเดินสาย', en: 'The machine behaves identically, provided the program logic is inverted to match the wiring' },
        { th: 'เครื่องจะหยุดเองทุกครั้งที่สายสัญญาณขาด ซึ่งทำให้เสียเวลาผลิตโดยไม่จำเป็น', en: 'The machine stops by itself whenever the wire breaks, wasting production time needlessly' }
      ],
      answer: 0,
      explain: {
        th: 'การกลับลอจิกให้ตรงกับการเดินสายคือความเข้าใจผิดที่พบบ่อยที่สุด เพราะ “กลับลอจิกในโปรแกรม” แก้ได้เฉพาะตอนที่สายยังดี แต่ไม่ได้แก้กรณีสายขาดหรือขั้วหลวม ซึ่งเป็นเหตุผลทั้งหมดที่มาตรฐานบังคับให้ใช้หน้าสัมผัสปกติปิด',
        en: 'Inverting the program logic is the commonest misconception: it works only while the wire is intact, and does nothing about a break or a loose terminal — which is the entire reason the standard mandates a closed contact.'
      }
    },
    {
      q: {
        th: 'เซนเซอร์บนสายพานคัดผลไม้สร้างพัลส์กว้าง 3 ms ต่อผลหนึ่งผล ส่วน PLC มีเวลาต่อรอบสแกน 8 ms สิ่งที่น่าจะเกิดขึ้นคือข้อใด',
        en: 'A sensor on a grading belt produces a 3 ms pulse per fruit, while the PLC scans in 8 ms. What is the likely outcome?'
      },
      options: [
        { th: 'นับได้ครบทุกผล แต่ค่าที่นับได้จะปรากฏช้ากว่าความจริงราวหนึ่งรอบสแกน', en: 'Every fruit is counted, but the total appears about one scan later than reality' },
        { th: 'นับได้ครบทุกผล เพราะ PLC เก็บพัลส์ที่เข้ามาไว้ในบัฟเฟอร์จนถึงจังหวะอ่านถัดไป', en: 'Every fruit is counted, because the PLC buffers incoming pulses until the next read beat' },
        { th: 'ผลไม้บางผลจะไม่ถูกนับเลย เพราะพัลส์เกิดและหายไปในช่วงที่ยังไม่ถึงจังหวะอ่านอินพุต', en: 'Some fruit is never counted, because a pulse appears and vanishes between two read beats' },
        { th: 'ผลไม้ทุกผลจะถูกนับสองครั้ง เพราะพัลส์สั้นกว่ารอบสแกนทำให้เกิดขอบสัญญาณซ้อน', en: 'Every fruit is counted twice, because a pulse shorter than the scan creates a double edge' }
      ],
      answer: 2,
      explain: {
        th: 'PLC ทั่วไปอ่านอินพุตเพียงครั้งเดียวต่อรอบและไม่มีบัฟเฟอร์เก็บพัลส์ไว้ (ตัวเลือกข้อ B คือความเข้าใจผิดสำคัญ) พัลส์ที่แคบกว่ารอบสแกนจึงหายได้ทั้งพัลส์ ต้องใช้อินพุตนับความเร็วสูงหรือยืดพัลส์ให้กว้างขึ้น',
        en: 'An ordinary PLC samples inputs once per cycle and buffers nothing (option B is the key misconception), so a pulse narrower than one scan can vanish whole. The fix is a high-speed counter input, or stretching the pulse.'
      }
    },
    {
      q: {
        th: 'แลดเดอร์บรรทัดหนึ่งเขียนว่า หน้าสัมผัสปุ่มเริ่มต่ออนุกรมกับหน้าสัมผัสปุ่มหยุดแบบ NC แล้วไปที่คอยล์มอเตอร์ โดย <em>ไม่มี</em> หน้าสัมผัสของคอยล์ต่อขนานกับปุ่มเริ่ม พฤติกรรมที่สังเกตได้คือข้อใด',
        en: 'A rung has the start contact in series with an NC stop contact feeding the motor coil, with <em>no</em> coil contact paralleled across the start button. What behaviour do you observe?'
      },
      options: [
        { th: 'มอเตอร์เดินเมื่อกดปุ่มเริ่ม และเดินต่อไปจนกดปุ่มหยุด ตามปกติของวงจรเริ่ม–หยุด', en: 'The motor runs on a press of Start and continues until Stop, as a start–stop circuit should' },
        { th: 'มอเตอร์ไม่เดินเลย เพราะหน้าสัมผัสปุ่มหยุดแบบ NC ตัดเส้นทางกระแสไว้ตั้งแต่ต้น', en: 'The motor never runs at all, because the NC stop contact blocks the path from the outset' },
        { th: 'มอเตอร์เดินสลับติดดับทุกรอบสแกน เพราะคอยล์ถูกเขียนค่าใหม่ทุกครั้งที่ประมวลผล', en: 'The motor flickers on and off every scan, because the coil is rewritten on each pass' },
        { th: 'มอเตอร์เดินเมื่อกดปุ่มเริ่ม และหยุดทันทีที่ปล่อยปุ่ม ต้องกดค้างไว้จึงจะเดินต่อ', en: 'The motor runs while Start is held and stops the moment it is released, so it must be held in' }
      ],
      answer: 3,
      explain: {
        th: 'ไม่มี seal-in หมายถึงไม่มีหน่วยความจำ เมื่อปล่อยปุ่ม อินพุตกลับเป็น 0 รอบสแกนถัดไปจึงคำนวณได้ \\( Y = 0 \\) ทันที ส่วนตัวเลือก B สับสนเรื่องหน้าสัมผัส NC ซึ่งยอม <em>ให้</em> กระแสผ่านเมื่อยังไม่ถูกกด',
        en: 'With no seal-in there is no memory: release the button and the input is 0, so the very next scan computes \\( Y = 0 \\). Option B confuses the NC contact, which <em>conducts</em> while nobody presses it.'
      }
    },
    {
      q: {
        th: 'ในโรงเรือนไก่ พัดลมระบายอากาศต้องเดินต่ออีก 60 วินาทีหลังฮีตเตอร์ดับ เพื่อไล่ความร้อนที่ค้างอยู่ ควรใช้บล็อกใดและเพราะอะไร',
        en: 'In a poultry house the extraction fan must run 60 s after the heater stops, to clear residual heat. Which block, and why?'
      },
      options: [
        { th: 'TON ตั้ง 60 วินาที เพราะต้องหน่วงเวลาก่อนที่เอาต์พุตพัดลมจะเปลี่ยนสถานะ', en: 'TON preset to 60 s, because the fan output must be delayed before it changes state' },
        { th: 'TOF ตั้ง 60 วินาที เพราะเอาต์พุตต้องค้างต่อไปอีกช่วงหนึ่งหลังเงื่อนไขหมดไป', en: 'TOF preset to 60 s, because the output must linger for a while after its condition ends' },
        { th: 'TP ตั้ง 60 วินาที เพราะต้องการช่วงเวลาทำงานที่แน่นอนไม่ขึ้นกับสิ่งอื่น', en: 'TP preset to 60 s, because a fixed interval is wanted regardless of anything else' },
        { th: 'CTU ตั้งค่า 60 เพราะต้องนับวินาทีไปจนครบแล้วจึงสั่งพัดลมให้หยุดทำงาน', en: 'CTU preset to 60, because seconds must be counted up before the fan is told to stop' }
      ],
      answer: 1,
      explain: {
        th: 'TOF คือบล็อกเดียวที่ “ติดพร้อมอินพุตแต่ดับช้ากว่า” ส่วน TON ให้ผลตรงกันข้าม TP จะจำกัดเวลาเดินพัดลมไว้ที่ 60 วินาทีแม้ฮีตเตอร์ยังทำงาน และ CTU นับขอบสัญญาณ ไม่ได้นับเวลา',
        en: 'TOF is the only block that rises with its input and falls late. TON does the opposite; TP would cap the fan at 60 s even while the heater still runs; and a CTU counts edges, not seconds.'
      }
    },
    {
      q: {
        th: 'หลังลดรูปนิพจน์ด้วย K-map จากสี่พจน์สามตัวแปร เหลือสามพจน์สองตัวแปร ประโยชน์ที่ได้จริงในทางปฏิบัติคือข้อใด',
        en: 'After a K-map reduces four three-variable terms to three two-variable terms, what is the genuine practical benefit?'
      },
      options: [
        { th: 'ความแม่นยำของการตัดสินใจสูงขึ้น เพราะนิพจน์ที่สั้นกว่าให้ผลลัพธ์ที่ถูกต้องกว่าเดิม', en: 'Decisions become more accurate, because a shorter expression gives a more correct result' },
        { th: 'จำนวนเซนเซอร์ที่ต้องติดตั้งในเครื่องจักรลดลง ทำให้ต้นทุนฮาร์ดแวร์ถูกลงตามไปด้วย', en: 'Fewer sensors need to be fitted to the machine, which brings the hardware cost down' },
        { th: 'จำนวนหน้าสัมผัสในโปรแกรมลดลง เวลาสแกนสั้นลง และคนที่มาซ่อมต่ออ่านเข้าใจง่ายขึ้น', en: 'Fewer contacts in the program, a shorter scan, and logic the next person can actually read' },
        { th: 'โปรแกรมทนต่อสัญญาณรบกวนทางไฟฟ้าได้มากขึ้น เพราะมีเงื่อนไขที่ต้องตรวจน้อยลง', en: 'The program tolerates electrical noise better, since there are fewer conditions to check' }
      ],
      answer: 2,
      explain: {
        th: 'การลดรูปไม่เปลี่ยนตารางค่าความจริง ผลลัพธ์จึงถูกต้องเท่าเดิมเสมอ (ตัวเลือก A ผิดที่ตรงนี้) และไม่ได้ลดจำนวนอินพุตที่ต้องวัด (ตัวเลือก B) สิ่งที่ลดคือจำนวนหน้าสัมผัสที่ต้องเขียนและประมวลผล',
        en: 'Minimisation does not change the truth table, so the result is exactly as correct as before (where option A fails), and it does not reduce the inputs you must measure (option B). What it reduces is contacts to write and to execute.'
      }
    },
    {
      q: {
        th: 'เคาน์เตอร์ CTU ตัวหนึ่งต่ออยู่กับเซนเซอร์ที่ตรวจจับถุงบนสายพาน ถ้าถุงหนึ่งใบหยุดสั่นค้างอยู่หน้าเซนเซอร์เป็นเวลา 4 วินาที ค่าที่นับได้จะเพิ่มขึ้นเท่าใด',
        en: 'A CTU is wired to a sensor watching bags on a belt. If one bag jitters in front of the sensor for 4 seconds, by how much does the count rise?'
      },
      options: [
        { th: 'เพิ่มขึ้นหนึ่งครั้งต่อหนึ่งขอบขาขึ้น จึงขึ้นกับว่าสัญญาณกระพริบกี่ครั้ง', en: 'By one per rising edge, so it depends on how many times the signal flickered' },
        { th: 'เพิ่มขึ้นหนึ่งเดียวเสมอ เพราะเคาน์เตอร์ล็อกค่าไว้จนกว่าถุงจะพ้นเซนเซอร์ไป', en: 'By exactly one, because the counter latches until the bag has left the sensor' },
        { th: 'ไม่เพิ่มขึ้นเลย เพราะสัญญาณที่ค้างนานเกินหนึ่งรอบสแกนจะถูกมองว่าเป็นความผิดปกติ', en: 'Not at all, because a signal held beyond one scan is treated as a fault condition' },
        { th: 'เพิ่มขึ้นหนึ่งต่อหนึ่งรอบสแกน ตลอดช่วงเวลาที่สัญญาณยังเป็นหนึ่งอยู่', en: 'By one per scan cycle, throughout the period the signal stays at one' }
      ],
      answer: 0,
      explain: {
        th: 'CTU นับขอบขาขึ้น ไม่ได้นับเวลาและไม่ได้นับรอบสแกน การสั่นทำให้เกิดขอบขาขึ้นหลายครั้งจึงนับเกิน ทางแก้คือใส่ TON หน่วงยืนยันสัญญาณ หรือกำหนดให้ต้องเห็นสัญญาณดับก่อนจะนับครั้งถัดไป',
        en: 'A CTU counts rising edges — not time, and not scans. Jitter produces several rising edges and so over-counts. The fix is a TON to confirm the signal, or requiring the signal to go low before the next count.'
      }
    }
  ]
});

AMRQuiz.mount('ch04-post', {
  type: 'post',
  chapter: 'ch04',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 4', en: 'Post-test — Chapter 4' },
  intro: {
    th: 'สิบข้อ เน้นการไล่ลำดับการทำงาน การวินิจฉัยอาการเสีย และการเลือกแบบ เกณฑ์ผ่าน 70%',
    en: 'Ten items on tracing logic, diagnosing symptoms and choosing a design. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'ช่างรายงานว่าเครื่องคัดผลไม้ “เดินตอนกดปุ่มเริ่ม แต่ดับทันทีที่ปล่อยมือ” ทั้งที่เมื่อวานใช้งานได้ปกติ สาเหตุใดอธิบายอาการนี้ได้ดีที่สุด',
        en: 'A technician reports that the grader “runs while Start is pressed but dies the moment it is released”, although it worked yesterday. Which cause best explains this?'
      },
      options: [
        { th: 'ค่าตั้งของไทเมอร์ TON ในวงจรถูกตั้งไว้สั้นเกินกว่าเวลาที่ผู้ใช้กดปุ่มค้างไว้', en: 'The TON preset in the rung is shorter than the time the operator holds the button' },
        { th: 'เวลาต่อรอบสแกนยาวเกินไปจนโปรแกรมอ่านสถานะปุ่มเริ่มไม่ทันในรอบเดียวกัน', en: 'The scan time is so long that the program cannot read the Start state within one cycle' },
        { th: 'หน้าสัมผัสของคอยล์ที่ต่อขนานกับปุ่มเริ่มเสียหรือถูกลบออกจากโปรแกรมไป', en: 'The coil contact paralleled across Start has failed or been deleted from the program' },
        { th: 'ปุ่มหยุดถูกเดินสายสลับจากปกติปิดเป็นปกติเปิด ทำให้เส้นทางกระแสขาดอยู่เสมอ', en: 'The Stop button has been swapped from closed to open, so the path is always broken' }
      ],
      answer: 2,
      explain: {
        th: 'อาการ “ต้องกดค้าง” คือลายเซ็นของการสูญเสีย seal-in ซึ่งเป็นหน่วยความจำหนึ่งบิตตามสมการ (4.7) ถ้าปุ่มหยุดถูกสลับเป็น NO เครื่องจะไม่เดินเลยแม้กดปุ่มเริ่ม และรอบสแกนที่ยาวเพียงทำให้ช้าลง ไม่ได้ลบความจำ',
        en: 'The “must hold it in” symptom is the signature of a lost seal-in, the one-bit memory of equation (4.7). Had Stop been swapped to NO the machine would not start at all, and a long scan only adds delay — it does not erase memory.'
      }
    },
    {
      q: {
        th: 'ขณะซ่อมบำรุง สายของวงจรหยุดฉุกเฉินถูกหนูกัดขาด แต่เครื่องยังเดินต่อได้ตามปกติ ข้อสรุปใดถูกต้อง',
        en: 'During maintenance a rodent severs the E-stop wiring, yet the machine keeps running normally. Which conclusion is correct?'
      },
      options: [
        { th: 'วงจรนี้ละเมิดหลัก fail-safe เพราะความผิดปกติไม่ได้นำระบบไปสู่สภาวะที่ปลอดภัยกว่า', en: 'The circuit violates fail-safe, because a fault did not drive the system to the safer state' },
        { th: 'วงจรยังปลอดภัยอยู่ หากโปรแกรมมีไทเมอร์เฝ้าระวังคอยตรวจการหายไปของสัญญาณ', en: 'The circuit remains safe provided a watchdog timer monitors for the signal disappearing' },
        { th: 'วงจรยังใช้ได้ เพราะปุ่มหยุดฉุกเฉินเป็นเพียงอุปกรณ์สำรองของปุ่มหยุดปกติอยู่แล้ว', en: 'The circuit is still acceptable, since an E-stop merely backs up the ordinary Stop button' },
        { th: 'วงจรทำงานถูกต้องตามหลัก fail-safe เพราะการขาดของสายไม่ควรหยุดการผลิตโดยไม่จำเป็น', en: 'The circuit is correctly fail-safe, since a broken wire should not needlessly halt production' }
      ],
      answer: 0,
      explain: {
        th: 'หน้าสัมผัสปกติปิดถูกบังคับใช้เพื่อให้สายขาดมีผลเท่ากับการกดปุ่ม อาการนี้จึงฟ้องว่าถูกเดินสายเป็น NO ตัวเลือก B น่าสนใจแต่ยังไม่พอ เพราะไทเมอร์ในซอฟต์แวร์ไม่ใช่มาตรการระดับฮาร์ดแวร์ที่มาตรฐานกำหนด',
        en: 'A closed contact is mandated so that a break acts like a press, so this symptom proves it was wired NO. Option B is tempting but insufficient: a software watchdog is not the hardware measure the standard requires.'
      }
    },
    {
      q: {
        th: 'ในโปรแกรมหนึ่ง บรรทัดที่ 1 ใช้บิต M10 เป็นเงื่อนไข และบรรทัดที่ 5 เป็นบรรทัดที่เขียนค่าลง M10 ผลที่สังเกตได้คือข้อใด',
        en: 'In one program, rung 1 uses bit M10 as a condition while rung 5 is what writes M10. What is observed?'
      },
      options: [
        { th: 'PLC จะจัดลำดับการประมวลผลใหม่ให้บรรทัดที่ 5 ทำงานก่อน เพื่อให้ข้อมูลสอดคล้องกัน', en: 'The PLC reorders execution so rung 5 runs first, keeping the data consistent' },
        { th: 'คอมไพเลอร์จะปฏิเสธโปรแกรมนี้ เพราะเป็นการอ้างอิงบิตก่อนที่จะถูกกำหนดค่า', en: 'The compiler rejects the program, since the bit is referenced before it is assigned' },
        { th: 'บรรทัดที่ 1 เห็นค่าใหม่ของ M10 ทันทีในรอบเดียวกัน เพราะทุกบรรทัดแชร์หน่วยความจำชุดเดียว', en: 'Rung 1 sees the new M10 immediately in the same cycle, since all rungs share one memory' },
        { th: 'บรรทัดที่ 1 เห็นค่าของ M10 จากรอบก่อนหน้า ผลจึงตามหลังอยู่หนึ่งรอบสแกนเสมอ', en: 'Rung 1 sees the previous cycle&rsquo;s M10, so the effect always trails by one scan' }
      ],
      answer: 3,
      explain: {
        th: 'PLC ประมวลผลบรรทัดบนลงล่างตามลำดับที่เขียน และไม่จัดลำดับใหม่ให้ บรรทัดที่อยู่เหนือกว่าจึงใช้ค่าที่ค้างจากรอบก่อน พฤติกรรมนี้ไม่ใช่ความผิดพลาดเสมอไป แต่ต้องรู้ตัวว่ามีการหน่วงหนึ่งรอบอยู่',
        en: 'A PLC executes rungs in the order written and does not reorder them, so a rung above uses the value left from the previous cycle. This is not always a bug, but you must know the one-cycle lag is there.'
      }
    },
    {
      q: {
        th: 'สายพานคัดผลไม้วิ่งที่ 0.75 m/s ผลไม้กว้าง 45 mm บัง ลำแสงเซนเซอร์ ส่วน PLC มีรอบสแกน 10 ms การนับจะเชื่อถือได้หรือไม่',
        en: 'A belt runs at 0.75 m/s and each fruit blocks the beam over 45 mm, while the PLC scans in 10 ms. Is the count reliable?'
      },
      options: [
        { th: 'ไม่น่าเชื่อถือ พัลส์กว้างราว 60 ms แต่ความหน่วงสองรอบสแกนทำให้นับซ้ำบางผล', en: 'Unreliable: the pulse is about 60 ms but the two-scan latency double-counts some fruit' },
        { th: 'เชื่อถือได้ พัลส์กว้างราว 60 ms ซึ่งมากกว่าสองรอบสแกน จึงถูกอ่านเห็นอย่างแน่นอน', en: 'Reliable: the pulse is about 60 ms, more than two scans, so it is certainly seen' },
        { th: 'เชื่อถือได้ พัลส์กว้างราว 34 ms ซึ่งพอดีกับสามรอบสแกน จึงอยู่ในเกณฑ์ที่ยอมรับได้', en: 'Reliable: the pulse is about 34 ms, exactly three scans, which is acceptable' },
        { th: 'ไม่น่าเชื่อถือ พัลส์กว้างราว 6 ms ซึ่งแคบกว่าหนึ่งรอบสแกน จึงมีโอกาสหายไปทั้งพัลส์', en: 'Unreliable: the pulse is about 6 ms, narrower than one scan, so it may vanish whole' }
      ],
      answer: 1,
      explain: {
        th: 'ความกว้างพัลส์ \\( = 0.045 / 0.75 = 0.060 \\) s หรือ 60 ms เทียบกับรอบสแกน 10 ms ถือว่ากว้างกว่ามากจึงปลอดภัย ส่วนความหน่วงสองรอบสแกนทำให้ค่าที่นับปรากฏช้าไป 20 ms แต่ไม่ได้ทำให้นับซ้ำ',
        en: 'Pulse width \\( = 0.045 / 0.75 = 0.060 \\) s, or 60 ms, against a 10 ms scan — comfortably wide. The two-scan latency delays the total by 20 ms but does not duplicate counts.'
      }
    },
    {
      q: {
        th: 'ต้องการเขียนเงื่อนไข “ไม่อนุญาตให้เดินเครื่อง เมื่อฝาครอบเปิด หรือ ถังสารเคมีว่าง” ให้อยู่ในรูปที่ใช้หน้าสัมผัสอนุกรมในแลดเดอร์ได้ นิพจน์ใดถูกต้อง',
        en: 'You must express “do not permit running when the guard is open or the chemical tank is empty” in a form that becomes series contacts in ladder. Which expression is right?'
      },
      options: [
        { th: '\\( Y = G \\cdot T \\) ซึ่งกระจายออกเป็นหน้าสัมผัสปกติเปิดสองตัวต่ออนุกรมกัน', en: '\\( Y = G \\cdot T \\), expanding to two open contacts in series' },
        { th: '\\( Y = \\overline{G \\cdot T} \\) ซึ่งกระจายออกเป็นหน้าสัมผัสปกติปิดสองตัวต่ออนุกรมกัน', en: '\\( Y = \\overline{G \\cdot T} \\), expanding to two closed contacts in series' },
        { th: '\\( Y = \\overline{G} \\cdot \\overline{T} \\) ซึ่งกระจายออกเป็นหน้าสัมผัสปกติปิดสองตัวต่อขนานกัน', en: '\\( Y = \\overline{G} \\cdot \\overline{T} \\), expanding to two closed contacts in parallel' },
        { th: '\\( Y = \\overline{G} + \\overline{T} \\) ซึ่งกระจายออกเป็นหน้าสัมผัสปกติเปิดสองตัวต่อขนานกัน', en: '\\( Y = \\overline{G} + \\overline{T} \\), expanding to two open contacts in parallel' }
      ],
      answer: 0,
      explain: {
        th: 'เงื่อนไขห้ามคือ \\( \\overline{Y} = \\overline{G} + \\overline{T} \\) ใช้เดอมอร์แกนตามสมการ (4.3) จะได้ \\( Y = \\overline{\\overline{G} + \\overline{T}} = G \\cdot T \\) ซึ่งคือหน้าสัมผัสสองตัวต่ออนุกรม อ่านได้ว่า “เดินได้เมื่อฝาครอบปิดและถังไม่ว่าง”',
        en: 'The prohibition is \\( \\overline{Y} = \\overline{G} + \\overline{T} \\). De Morgan, equation (4.3), gives \\( Y = \\overline{\\overline{G} + \\overline{T}} = G \\cdot T \\) — two contacts in series, reading “run when the guard is closed and the tank is not empty”.'
      }
    },
    {
      q: {
        th: 'เครื่องบรรจุหยุดนิ่งกลางดึกโดยไม่มีไฟแจ้งเตือนใด ๆ เช้ามาพบว่าถุงติดขัดที่ทางออกและลำดับยังค้างอยู่ที่ขั้นสุดท้าย สิ่งที่ควรเพิ่มในการออกแบบคือข้อใด',
        en: 'A bagging machine sits dead overnight with no alarm lit. In the morning a jammed bag is found at the exit and the sequence is still parked on its last step. What should the design have included?'
      },
      options: [
        { th: 'การเพิ่มจำนวนขั้นใน SFC ให้ละเอียดขึ้น เพื่อให้ระบุตำแหน่งที่ติดขัดได้แม่นยำกว่า', en: 'More, finer steps in the SFC, so the stuck position can be identified more precisely' },
        { th: 'การเปลี่ยนเงื่อนไขเปลี่ยนขั้นให้ใช้ OR แทน AND เพื่อให้ลำดับเดินต่อได้แม้ขาดสัญญาณ', en: 'Transitions written with OR instead of AND, so the sequence advances despite a missing signal' },
        { th: 'ไทเมอร์เฝ้าระวังในแต่ละขั้น ที่แจ้งเตือนเมื่อขั้นนั้นแอ็กทีฟค้างนานเกินเวลาที่ควรเป็น', en: 'A per-step watchdog timer that alarms when a step stays active longer than it should' },
        { th: 'การลดเวลาต่อรอบสแกนลง เพื่อให้ระบบตรวจพบเงื่อนไขที่เปลี่ยนแปลงได้เร็วกว่าเดิม', en: 'A shorter scan time, so the system detects changing conditions sooner than before' }
      ],
      answer: 2,
      explain: {
        th: 'พฤติกรรมค้างรอเงื่อนไขเป็นการทำงานที่ถูกต้องของ SFC สิ่งที่ขาดคือกลไกตรวจจับว่า “รอนานเกินไปแล้ว” ตัวเลือก B อันตรายมาก เพราะการเดินต่อโดยไม่มีสัญญาณยืนยันอาจทำให้เครื่องสั่งงานทับถุงที่ยังติดอยู่',
        en: 'Parking to wait for a condition is correct SFC behaviour; what is missing is a means of noticing it has waited too long. Option B is actively dangerous: advancing without confirmation could drive the machine into the bag still jammed there.'
      }
    },
    {
      q: {
        th: 'รอบพ่นหมอกเดิมคือ พ่น 30 วินาที หยุด 10 นาที ผู้ดูแลต้องการเพิ่มความชื้นจึงลดเวลาหยุดลงเหลือ 1 นาที ข้อสรุปทางวิศวกรรมใดสำคัญที่สุดที่ต้องแจ้งเขา',
        en: 'The misting cycle is 30 s on, 10 min off. The grower wants more humidity and asks to cut the pause to 1 minute. Which engineering consequence matters most to tell them?'
      },
      options: [
        { th: 'สัดส่วนเวลาทำงานเพิ่มจาก 4.8% เป็น 33% ซึ่งทำให้ค่าไฟของปั๊มสูงขึ้นอย่างมีนัยสำคัญ', en: 'Duty rises from 4.8% to 33%, which raises the pump&rsquo;s electricity cost significantly' },
        { th: 'จำนวนครั้งการสลับวาล์วเพิ่มจาก 137 เป็น 960 ครั้งต่อวัน ทำให้อายุวาล์วสั้นลงราวเจ็ดเท่า', en: 'Valve operations rise from 137 to 960 per day, cutting valve life roughly sevenfold' },
        { th: 'ค่าตั้งของไทเมอร์ต้องเปลี่ยนเป็นหน่วยมิลลิวินาที เพราะช่วงเวลาที่สั้นลงเกินความละเอียดเดิม', en: 'The timer preset must move to milliseconds, since the shorter interval exceeds its resolution' },
        { th: 'ต้องเปลี่ยนจากไทเมอร์ TON ไปใช้ TP เพราะรอบการทำงานที่ถี่ขึ้นต้องการช่วงเวลาที่คงที่', en: 'The TON blocks must become TP, because a faster cycle needs a fixed interval' }
      ],
      answer: 1,
      explain: {
        th: 'จำนวนรอบต่อวันเปลี่ยนจาก \\( 86400/630 \\approx 137 \\) เป็น \\( 86400/90 \\approx 960 \\) ครั้ง อายุวาล์วที่พิกัดหนึ่งล้านครั้งจึงลดจากราว 20 ปีเหลือราว 3 ปี ส่วนค่าไฟเพิ่มขึ้นจริงแต่เป็นผลที่ชัดเจนและแก้ง่ายกว่าการเปลี่ยนวาล์วบ่อย',
        en: 'Cycles per day go from \\( 86400/630 \\approx 137 \\) to \\( 86400/90 \\approx 960 \\), so a valve rated at one million operations drops from about 20 years of life to about 3. Energy does rise, but that is an obvious and far cheaper consequence than replacing valves.'
      }
    },
    {
      q: {
        th: 'ไทเมอร์ TON ตั้งไว้ 5 วินาที รับอินพุตที่ติดเพียง 3 วินาทีแล้วดับ ติดอีก 3 วินาทีแล้วดับ สลับไปเรื่อย ๆ เอาต์พุตของ TON จะเป็นอย่างไร',
        en: 'A TON preset to 5 s receives an input that is on for 3 s, off, on for 3 s, off, repeatedly. What does its output do?'
      },
      options: [
        { th: 'ติดเป็นช่วงสั้น ๆ ทุกครั้งที่อินพุตดับ เพราะไทเมอร์สรุปผลเมื่อสิ้นสุดการนับแต่ละรอบ', en: 'Pulses briefly whenever the input drops, as the timer concludes each counting round' },
        { th: 'ติดค้างตลอดเวลาหลังรอบแรก เพราะเอาต์พุตของ TON ไม่ขึ้นกับสถานะอินพุตอีกต่อไป', en: 'Stays on permanently after the first burst, the output no longer following the input' },
        { th: 'ติดหลังจากรอบที่สอง เพราะเวลาที่สะสมจากทั้งสองรอบรวมกันแล้วเกินค่าที่ตั้งไว้', en: 'Turns on after the second burst, since the time accumulated across both exceeds the preset' },
        { th: 'ไม่ติดเลย เพราะเวลาสะสมถูกล้างกลับเป็นศูนย์ทุกครั้งที่อินพุตดับก่อนครบค่าที่ตั้ง', en: 'Never turns on, because the accumulator resets to zero each time the input drops early' }
      ],
      answer: 3,
      explain: {
        th: 'TON ต้องเห็นอินพุตติด <em>ต่อเนื่อง</em> ครบเวลาที่ตั้ง การดับระหว่างทางจะล้างค่าสะสม ความเข้าใจผิดที่พบบ่อยคือคิดว่าไทเมอร์สะสมเวลาข้ามรอบได้ ซึ่งเป็นพฤติกรรมของไทเมอร์แบบ retentive คนละชนิดกัน',
        en: 'A TON needs the input held <em>continuously</em> for the preset; dropping part-way clears the accumulator. The common misconception is that it accumulates across bursts — that is a retentive timer, a different block.'
      }
    },
    {
      q: {
        th: 'โปรแกรมหนึ่งมีคอยล์ Q0 ปรากฏอยู่สองบรรทัด บรรทัดที่ 2 สั่งให้ติดเมื่อเงื่อนไข A เป็นจริง และบรรทัดที่ 7 สั่งให้ติดเมื่อเงื่อนไข B เป็นจริง ผลที่เกิดขึ้นคือข้อใด',
        en: 'A program contains coil Q0 on two rungs: rung 2 energises it when A is true, and rung 7 energises it when B is true. What results?'
      },
      options: [
        { th: 'Q0 ขึ้นกับเงื่อนไข B เพียงอย่างเดียว เพราะบรรทัดล่างเขียนค่าทับผลของบรรทัดบนในรอบเดียวกัน', en: 'Q0 follows B alone, since the lower rung overwrites the upper one within the same cycle' },
        { th: 'Q0 ติดเมื่อ A และ B เป็นจริงพร้อมกัน เพราะต้องผ่านเงื่อนไขของทั้งสองบรรทัดจึงจะติด', en: 'Q0 is on when A and B are both true, since it must satisfy the conditions of both rungs' },
        { th: 'Q0 กระพริบสลับตามเงื่อนไขของสองบรรทัด ด้วยคาบเท่ากับสองเท่าของเวลาต่อรอบสแกน', en: 'Q0 alternates between the two rungs&rsquo; conditions, with a period of two scan cycles' },
        { th: 'Q0 ติดเมื่อ A หรือ B เป็นจริง เพราะ PLC รวมเงื่อนไขของคอยล์ชื่อเดียวกันเข้าด้วยกันเอง', en: 'Q0 is on when A or B is true, since the PLC combines conditions for coils of one name' }
      ],
      answer: 0,
      explain: {
        th: 'ภายในหนึ่งรอบสแกน บรรทัดที่ 7 ถูกประมวลผลหลังบรรทัดที่ 2 และเขียนค่าลง output image ทับไป ค่าที่ส่งออกจริงในจังหวะที่ 3 จึงมาจากบรรทัดล่างเสมอ นี่คือเหตุผลที่ห้ามเขียนคอยล์เดียวกันซ้ำสองที่',
        en: 'Within one scan, rung 7 executes after rung 2 and overwrites the output image, so what actually reaches the terminal in beat 3 always comes from the lower rung. This is precisely why a duplicated coil is forbidden.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 4.2 ถ้าเพิ่มเวลาต่อรอบสแกนจาก 4 ms เป็น 16 ms ความหน่วงที่แย่ที่สุดของการตอบสนองจะเปลี่ยนไปอย่างไร และกระทบงานใดมากที่สุด',
        en: 'In Animation 4.2, raising the scan from 4 ms to 16 ms changes the worst-case response how, and affects which task most?'
      },
      options: [
        { th: 'เพิ่มจากราว 4 ms เป็นราว 16 ms กระทบมากที่สุดกับการนับจำนวนถุงที่บรรจุเสร็จต่อกะ', en: 'From about 4 ms to about 16 ms, affecting the per-shift tally of finished bags most' },
        { th: 'ไม่เปลี่ยนแปลง เพราะความหน่วงถูกกำหนดโดยเวลาตอบสนองของเซนเซอร์เป็นหลักอยู่แล้ว', en: 'It does not change, since latency is set mainly by the sensor&rsquo;s own response time' },
        { th: 'เพิ่มจากราว 8 ms เป็นราว 32 ms กระทบมากที่สุดกับการควบคุมอุณหภูมิในโรงเรือนขนาดใหญ่', en: 'From about 8 ms to about 32 ms, affecting temperature control in a large greenhouse most' },
        { th: 'เพิ่มจากราว 8 ms เป็นราว 32 ms กระทบมากที่สุดกับการผลักผลไม้ลงรางบนสายพานความเร็วสูง', en: 'From about 8 ms to about 32 ms, affecting high-speed fruit diversion on a belt most' }
      ],
      answer: 3,
      explain: {
        th: 'ตามสมการ (4.6) ความหน่วงที่แย่ที่สุดคือราวสองรอบสแกน จึงเพิ่มจาก 8 เป็น 32 ms ส่วนผลกระทบขึ้นกับพลวัตของงาน อุณหภูมิโรงเรือนเปลี่ยนในหน่วยนาทีจึงไม่รู้สึกอะไร แต่สายพานที่วิ่ง 0.5 m/s จะพาผลไม้เคลื่อนไป 16 mm ในช่วงเวลานั้น',
        en: 'By equation (4.6) the worst case is about two scans, so 8 ms becomes 32 ms. Whether it matters depends on the task&rsquo;s dynamics: greenhouse temperature moves over minutes and never notices, while a belt at 0.5 m/s carries the fruit 16 mm in that time.'
      }
    }
  ]
});
