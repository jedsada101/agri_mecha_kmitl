/* ==========================================================================
   Chapter 1 — pre-test and post-test items
   Written to the course item-writing rules: options parallel in form and
   length, distractors drawn from real misconceptions, and questions that ask
   the learner to classify, judge or reason rather than recall a definition.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch01-pre', {
  type: 'pre',
  chapter: 'ch01',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 1', en: 'Pre-test — Chapter 1' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการจำแนกและการให้เหตุผล ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around classifying and reasoning. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'เครื่องจักรสี่เครื่องต่อไปนี้ เครื่องใดสมควรเรียกว่าออกแบบเชิงเมคคาทรอนิกส์มากที่สุด',
        en: 'Of these four machines, which most deserves to be called a mechatronic design?'
      },
      options: [
        { th: 'รถไถที่เปลี่ยนจากเครื่องยนต์ดีเซลมาเป็นมอเตอร์ไฟฟ้า โดยใช้โครงสร้างและชุดส่งกำลังเดิมทั้งหมด', en: 'A tiller re-engined from diesel to an electric motor, keeping the original frame and drivetrain' },
        { th: 'แขนเก็บผลไม้ที่ลดความแข็งแรงของโครงลงเพื่อให้เบา แล้วชดเชยการสั่นด้วยอัลกอริทึมควบคุม', en: 'A picking arm made lighter by reducing structural stiffness, with vibration handled in the control algorithm' },
        { th: 'เครื่องสีข้าวที่ติดจอสัมผัสและเชื่อมต่ออินเทอร์เน็ตเพื่อรายงานปริมาณการผลิตรายวัน', en: 'A rice mill fitted with a touchscreen and internet link to report daily output' },
        { th: 'เครื่องหยอดเมล็ดที่เพิ่มเซนเซอร์นับเมล็ดไว้ตรวจสอบการทำงานหลังออกแบบกลไกเสร็จแล้ว', en: 'A seeder given a seed-counting sensor to verify operation after the mechanism was finalised' }
      ],
      answer: 1,
      explain: {
        th: 'หัวใจของเมคคาทรอนิกส์คือการบูรณาการตั้งแต่ขั้นออกแบบ จนสามารถ <em>แลก</em> ข้อจำกัดของศาสตร์หนึ่งด้วยความสามารถของอีกศาสตร์ได้ มีเพียงข้อ B ที่ยอมลดความแข็งแรงทางกลเพราะรู้ว่าระบบควบคุมจะรับภาระนั้นแทน อีกสามข้อเป็นการเพิ่มของเข้าไปหลังออกแบบเสร็จ',
        en: 'Mechatronics means integration from the design stage, to the point where a limitation in one domain is <em>traded</em> for a capability in another. Only B accepts less mechanical stiffness because the controller will carry that burden. The other three add components to a finished design.'
      }
    },
    {
      q: {
        th: 'ในระบบให้น้ำที่สั่งงานด้วยความชื้นดิน ข้อใดจับคู่อุปกรณ์กับบทบาทได้ถูกต้องทั้งคู่',
        en: 'In a moisture-driven irrigation system, which pairing gets both roles right?'
      },
      options: [
        { th: 'หน้าจอแสดงผลเป็นแอคชูเอเตอร์ และโซลินอยด์วาล์วเป็นระบบทางกล', en: 'The display is the actuator and the solenoid valve is the mechanical system' },
        { th: 'แผงโซลาร์เป็นแอคชูเอเตอร์ และท่อน้ำหยดเป็นตัวรับรู้สถานะ', en: 'The solar panel is the actuator and the drip line is the sensing element' },
        { th: 'เซนเซอร์ความชื้นดินเป็นแอคชูเอเตอร์ และโซลินอยด์วาล์วเป็นเซนเซอร์', en: 'The moisture probe is the actuator and the solenoid valve is the sensor' },
        { th: 'โซลินอยด์วาล์วเป็นแอคชูเอเตอร์ และเซนเซอร์ความชื้นดินเป็นตัวรับรู้สถานะ', en: 'The solenoid valve is the actuator and the moisture probe is the sensing element' }
      ],
      answer: 3,
      explain: {
        th: 'แอคชูเอเตอร์คือสิ่งที่แปลงพลังงานเป็นการกระทำทางกายภาพต่อกระบวนการ วาล์วเปิด–ปิดการไหลจึงเป็นแอคชูเอเตอร์ ส่วนแผงโซลาร์เป็นแหล่งพลังงาน และหน้าจอเป็นส่วนติดต่อผู้ใช้ ไม่ใช่ทั้งสองอย่าง',
        en: 'An actuator converts energy into a physical action on the process, so the valve qualifies. A solar panel is a power source and a display is a user interface — neither is an actuator.'
      }
    },
    {
      q: {
        th: 'หุ่นยนต์รีดนมที่แขนกลติดตั้งอยู่ใต้ตัวโค โดยโคเดินเข้ามาหาเครื่องเอง ควรจำแนกเป็นแบบใด',
        en: 'A milking robot whose arm sits under the cow, with the cow walking to the machine, is classified how?'
      },
      options: [
        { th: 'แบบติดตั้งอยู่กับที่ เพราะฐานของหุ่นยนต์ยึดแน่น ส่วนที่เคลื่อนที่คือชิ้นงาน', en: 'Fixed, because the robot&rsquo;s base is bolted down and it is the workpiece that moves' },
        { th: 'แบบผสม เพราะมีทั้งแขนกลที่ยึดแน่นและเป้าหมายที่เปลี่ยนตำแหน่งได้อิสระ', en: 'Hybrid, because it combines a bolted arm with a freely repositioning target' },
        { th: 'ไม่จัดเป็นหุ่นยนต์ เพราะทำงานซ้ำรูปแบบเดียวและไม่ได้เคลื่อนที่ไปที่อื่น', en: 'Not a robot, since it repeats one pattern and never travels anywhere' },
        { th: 'แบบเคลื่อนที่ เพราะสิ่งที่หุ่นยนต์ทำงานด้วยคือสัตว์ที่เคลื่อนไหวได้ตลอดเวลา', en: 'Mobile, because what it works on is an animal that moves continuously' }
      ],
      answer: 0,
      explain: {
        th: 'เกณฑ์การจำแนกคือ “ฐานเคลื่อนที่หรือไม่” ไม่ใช่ “ชิ้นงานเคลื่อนที่หรือไม่” ฐานที่ยึดแน่นให้ระบบพิกัดอ้างอิงคงที่ ส่วนคำว่าแบบผสม (mobile manipulator) ใช้เมื่อ <em>ฐาน</em> ของแขนกลเองเคลื่อนที่ได้',
        en: 'The test is whether the <em>base</em> moves, not whether the workpiece does. A bolted base gives a permanent reference frame. “Hybrid”, or mobile manipulator, applies when the arm&rsquo;s own base travels.'
      }
    },
    {
      q: {
        th: 'ข้อใดอธิบายความต่างระหว่างเครื่องจักร automatic กับระบบที่มี autonomy ได้ตรงที่สุด',
        en: 'Which statement most precisely separates an automatic machine from an autonomous one?'
      },
      options: [
        { th: 'automatic ใช้เซนเซอร์เพียงไม่กี่ตัว ส่วน autonomous ต้องใช้เซนเซอร์จำนวนมากและกล้อง', en: 'Automatic uses only a few sensors; autonomous requires many sensors and cameras' },
        { th: 'automatic เป็นคำที่ใช้กับเครื่องจักรกล ส่วน autonomous ใช้กับระบบที่มีซอฟต์แวร์ควบคุม', en: 'Automatic describes mechanical machines; autonomous describes software-controlled systems' },
        { th: 'automatic ทำตามลำดับที่กำหนดไว้ล่วงหน้า ส่วน autonomous เลือกการกระทำจากข้อมูลที่รับเข้ามาขณะนั้น', en: 'Automatic follows a predefined sequence; autonomous chooses its action from data available at the time' },
        { th: 'automatic ทำงานโดยไม่ต้องมีคนอยู่ใกล้ ส่วน autonomous ต้องมีผู้ควบคุมคอยกำกับดูแลอยู่เสมอ', en: 'Automatic needs nobody nearby; autonomous always needs a supervisor watching over it' }
      ],
      answer: 2,
      explain: {
        th: 'ความต่างอยู่ที่ว่า “ใครเป็นผู้เลือกการกระทำ” ไม่ใช่จำนวนเซนเซอร์หรือการมีคนอยู่ใกล้ รถเกี่ยวที่วิ่งตามแนว GNSS เป็น automatic ส่วนหุ่นยนต์ที่ตัดสินใจเองว่าจะหลบต้นไม้ล้มอย่างไรเป็น autonomous',
        en: 'The difference is who chooses the action, not how many sensors there are or whether a person stands nearby. A combine following a GNSS line is automatic; a robot deciding for itself how to get around a fallen tree is autonomous.'
      }
    },
    {
      q: {
        th: 'โรงคัดบรรจุจะติดตั้งหุ่นยนต์หยิบผลไม้จากสายพานลงลัง 120 ครั้งต่อนาที เหตุผลใดสนับสนุนการเลือกหุ่นยนต์แบบติดตั้งอยู่กับที่ได้หนักแน่นที่สุด',
        en: 'A packhouse will install a robot picking fruit off a belt into crates at 120 picks a minute. Which reason most strongly supports choosing a fixed robot?'
      },
      options: [
        { th: 'หุ่นยนต์แบบติดตั้งอยู่กับที่ไม่จำเป็นต้องมีเซนเซอร์ตรวจตำแหน่งชิ้นงานเหมือนแบบเคลื่อนที่', en: 'A fixed robot needs no sensing of workpiece position, unlike a mobile robot' },
        { th: 'สภาพแวดล้อมในโรงคัดบรรจุมีฝุ่นและความชื้นน้อยกว่าในแปลงเกษตรอย่างเห็นได้ชัด', en: 'A packhouse environment is noticeably less dusty and humid than an open field' },
        { th: 'หุ่นยนต์แบบติดตั้งอยู่กับที่มีราคาถูกกว่าหุ่นยนต์แบบเคลื่อนที่ในทุกระดับความสามารถ', en: 'A fixed robot costs less than a mobile robot at every level of capability' },
        { th: 'ชิ้นงานถูกลำเลียงเข้ามาในปริมาตรทำงานที่คำนวณไว้แล้ว และต้องการความแม่นยำสูงที่ความเร็วสูง', en: 'The work arrives inside a pre-computed workspace, and accuracy is needed at speed' }
      ],
      answer: 3,
      explain: {
        th: 'เหตุผลที่แข็งที่สุดคือลักษณะของงานเอง: ชิ้นงานเข้ามาหาหุ่นยนต์ในขอบเขตที่รู้ล่วงหน้า และต้องการความแม่นยำระดับที่ฐานยึดแน่นเท่านั้นจะให้ได้ ส่วนข้อ A ผิด เพราะยังต้องใช้กล้องหาตำแหน่งผลไม้ และข้อ C กล่าวเกินจริง',
        en: 'The strongest reason is the nature of the task: the work comes to the robot within known bounds, and demands accuracy only a bolted base can provide. Option A is wrong — a camera is still needed to locate each fruit — and option C overstates the case.'
      }
    },
    {
      q: {
        th: 'ความท้าทายใดที่ทำให้อัลกอริทึมหยิบจับของหุ่นยนต์เกษตรต่างจากหุ่นยนต์ในโรงงานมากที่สุด',
        en: 'Which challenge most sharply separates an agricultural robot&rsquo;s grasping algorithm from a factory robot&rsquo;s?'
      },
      options: [
        { th: 'หุ่นยนต์เกษตรต้องทำงานด้วยแหล่งพลังงานที่จำกัดกว่า จึงต้องประหยัดการเคลื่อนไหวทุกครั้ง', en: 'Agricultural robots work from a more limited energy supply, so every motion must be economical' },
        { th: 'ชิ้นงานแต่ละชิ้นมีขนาด สี และตำแหน่งขั้วต่างกัน อัลกอริทึมจึงต้องทนต่อความแปรผัน', en: 'Every item differs in size, colour and stem position, so the algorithm must tolerate variation' },
        { th: 'หุ่นยนต์เกษตรมีจำนวนข้อต่อน้อยกว่า ทำให้มีอิสระในการเลือกท่าทางการหยิบจำกัดกว่า', en: 'Agricultural robots have fewer joints, limiting the choice of grasp postures' },
        { th: 'หุ่นยนต์เกษตรทำงานช้ากว่า จึงต้องวางแผนเส้นทางให้ละเอียดกว่าเพื่อชดเชยเวลา', en: 'Agricultural robots are slower, so paths must be planned in finer detail to compensate' }
      ],
      answer: 1,
      explain: {
        th: 'ในโรงงานชิ้นงานเหมือนกันทุกชิ้น อัลกอริทึมจึงสมมติรูปทรงคงที่ได้ ส่วนผลผลิตทางชีวภาพแปรผันตามธรรมชาติ นี่คือความท้าทายที่กระทบ <em>การรับรู้และการวางแผนการจับ</em> โดยตรง ส่วนข้ออื่นเป็นข้อจำกัดทางวิศวกรรมทั่วไปที่แก้ด้วยการออกแบบฮาร์ดแวร์',
        en: 'Factory parts are identical, so an algorithm can assume a fixed shape. Biological produce varies by nature, and that is the challenge which bears directly on <em>perception and grasp planning</em>. The other options are ordinary engineering constraints addressed in hardware.'
      }
    },
    {
      q: {
        th: 'ในแผนภาพบล็อกของระบบควบคุมโรงเรือน “ความเข้มแสงอาทิตย์ที่เปลี่ยนเมื่อเมฆบัง” ควรวาดเข้าที่ตำแหน่งใด',
        en: 'In the block diagram of a greenhouse controller, where does “solar radiation changing as a cloud passes” belong?'
      },
      options: [
        { th: 'เป็นเอาต์พุตของคอนโทรลเลอร์ เพราะระบบต้องตอบสนองต่อการเปลี่ยนแปลงนี้ทุกครั้ง', en: 'As the controller output, since the system must react to this change every time' },
        { th: 'เป็นอินพุตที่จุดเปรียบเทียบ ร่วมกับค่าที่ผู้ใช้ตั้งไว้ เพราะมีผลต่อเป้าหมายการควบคุม', en: 'As an input at the comparator, alongside the operator&rsquo;s setpoint, since it affects the target' },
        { th: 'เป็นสัญญาณที่เข้ากระทำกับกระบวนการโดยตรง โดยที่เราไม่ได้สั่งและควบคุมไม่ได้', en: 'As a signal acting directly on the process, neither commanded by us nor controllable' },
        { th: 'เป็นสัญญาณป้อนกลับที่ออกจากเซนเซอร์ เพราะเป็นค่าที่วัดได้จากสภาพแวดล้อมจริง', en: 'As the feedback signal out of the sensor, being a measured value from the real environment' }
      ],
      answer: 2,
      explain: {
        th: 'นี่คือนิยามของสิ่งรบกวน \\( d(t) \\) ซึ่งในรูปที่ 1.2 วาดเป็นลูกศรเข้าที่บล็อกกระบวนการโดยตรง จุดที่มักสับสนคือมองว่าเพราะ “วัดได้” จึงเป็นสัญญาณป้อนกลับ แต่สิ่งที่ป้อนกลับคือผลลัพธ์ \\( y \\) ไม่ใช่ต้นเหตุ',
        en: 'This is the definition of a disturbance \\( d(t) \\), drawn in Figure 1.2 as an arrow into the process block. The usual confusion is that because it can be measured it must be feedback — but what is fed back is the output \\( y \\), not the cause.'
      }
    },
    {
      q: {
        th: 'ฟาร์มทุเรียนขนาด 15 ไร่ในภาคตะวันออกต้องการลงทุนระบบอัตโนมัติด้วยงบจำกัด ข้อเสนอใดมีโอกาสคืนทุนเร็วที่สุด และเพราะเหตุใด',
        en: 'A 15-rai durian farm in eastern Thailand wants to invest in automation on a limited budget. Which proposal is likeliest to pay back soonest, and why?'
      },
      options: [
        { th: 'เครื่องคัดขนาดและบรรจุในโรงคัด เพราะใช้งานได้ทั้งปีและทำงานในสภาพแวดล้อมที่จัดเตรียมได้', en: 'A grading and packing line in the packhouse, usable year-round in an environment we control' },
        { th: 'โดรนพ่นสารอัตโนมัติ เพราะลดการสัมผัสสารเคมีของคนงานและทำงานได้เร็วกว่าการเดินพ่น', en: 'A spraying drone, since it cuts worker chemical exposure and covers ground faster than walking' },
        { th: 'รถแทรกเตอร์ไร้คนขับ เพราะใช้ได้กับงานหลายอย่างในฟาร์มและมีเทคโนโลยีที่พร้อมใช้แล้ว', en: 'A driverless tractor, because it suits several farm jobs and the technology is already mature' },
        { th: 'หุ่นยนต์เก็บเกี่ยวในแปลง เพราะทดแทนแรงงานในงานที่หนักและหาคนทำยากที่สุดในฟาร์ม', en: 'An in-field harvesting robot, because it replaces the heaviest labour and the hardest to hire for' }
      ],
      answer: 0,
      explain: {
        th: 'ตัวแปรที่ตัดสินการคืนทุนคืออัตราการใช้งาน เครื่องเก็บเกี่ยวทุเรียนใช้ได้เพียงไม่กี่สัปดาห์ต่อปีและต้องเจอสภาพแวดล้อมที่ไม่ถูกจัดระเบียบ ส่วนเครื่องในโรงคัดบรรจุทำงานได้ยาวนานกว่าและอยู่ในสภาพแวดล้อมที่ควบคุมได้ ทุกข้อมีข้อดีจริง แต่โจทย์ถามถึงการคืนทุน',
        en: 'Payback hinges on utilisation. A durian harvester runs a few weeks a year in an unstructured environment, while packhouse equipment runs far longer in conditions we arrange. Every option has genuine merit; the question asks about payback.'
      }
    }
  ]
});

AMRQuiz.mount('ch01-post', {
  type: 'post',
  chapter: 'ch01',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 1', en: 'Post-test — Chapter 1' },
  intro: {
    th: 'สิบข้อ เน้นการจำแนกกรณีจริง การเลือกแบบ และการให้เหตุผล เกณฑ์ผ่าน 70%',
    en: 'Ten items on classifying real cases, choosing designs and justifying them. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'ทีมหนึ่งออกแบบแขนเก็บสตรอว์เบอร์รีโดยลดน้ำหนักโครงลง 30% แล้วใส่อัลกอริทึมหักล้างการสั่นเข้าไปแทน ข้อใดอธิบายได้ถูกต้องว่าเหตุใดนี่คือการคิดเชิงเมคคาทรอนิกส์',
        en: 'A team cuts a strawberry arm&rsquo;s structural mass by 30% and adds a vibration-cancelling algorithm instead. Why is that mechatronic thinking?'
      },
      options: [
        { th: 'เพราะลดต้นทุนวัสดุลงได้ โดยเพิ่มเพียงต้นทุนซอฟต์แวร์ที่ทำซ้ำได้โดยไม่มีค่าใช้จ่าย', en: 'Because material cost falls while only software cost is added, and software copies free' },
        { th: 'เพราะใช้อุปกรณ์อิเล็กทรอนิกส์และซอฟต์แวร์ร่วมกับชิ้นส่วนทางกลภายในเครื่องเดียวกัน', en: 'Because electronics and software sit alongside mechanical parts in one machine' },
        { th: 'เพราะยอมรับข้อจำกัดทางกลที่เกิดขึ้น โดยรู้ล่วงหน้าว่าระบบควบคุมจะชดเชยให้ได้', en: 'Because a mechanical limitation is accepted in the knowledge that control will compensate' },
        { th: 'เพราะทำให้แขนกลเบาลงจึงเคลื่อนที่ได้เร็วขึ้น ซึ่งเพิ่มผลิตภาพของการเก็บเกี่ยวโดยตรง', en: 'Because a lighter arm moves faster, which directly raises harvesting productivity' }
      ],
      answer: 2,
      explain: {
        th: 'ข้อที่ว่าแขนเบาลงจึงเร็วขึ้น ข้อที่ว่าประหยัดค่าวัสดุ และข้อที่ว่ามีอิเล็กทรอนิกส์อยู่ร่วมกับชิ้นส่วนกล ล้วนเป็นข้อเท็จจริงที่ถูกต้อง แต่ไม่ใช่ <em>เหตุผล</em> ที่ทำให้เรียกว่าเมคคาทรอนิกส์ สิ่งที่ชี้ชัดคือการ <em>แลก</em> ข้อจำกัดข้ามศาสตร์อย่างตั้งใจตั้งแต่ขั้นออกแบบ ซึ่งทำได้เฉพาะเมื่อออกแบบทุกส่วนไปพร้อมกัน',
        en: 'That a lighter arm moves faster, that material cost falls, and that electronics sit alongside mechanical parts are all true statements — but none is the <em>reason</em> the design is mechatronic. What identifies it is the deliberate cross-domain trade at the design stage, possible only when every part is designed together.'
      }
    },
    {
      q: {
        th: 'เครื่องคัดขนาดมะม่วงเครื่องหนึ่งใช้กล้องตรวจขนาด คอมพิวเตอร์ตัดสินเกรด กระบอกลมผลักผลไม้ และสายพานลำเลียง หากเปลี่ยนกล้องเป็นรุ่นที่ความคลาดเคลื่อน ±8 mm จากเดิม ±2 mm ผลที่ตามมาคือข้อใด',
        en: 'A mango grader uses a camera for size, a computer for grade, cylinders to divert and a belt to convey. Swapping the camera for one with ±8 mm error instead of ±2 mm leads to what?'
      },
      options: [
        { th: 'ความแม่นยำการคัดเกรดลดลงตามเซนเซอร์ เพราะคุณภาพของระบบถูกจำกัดด้วยด่านที่แย่ที่สุด', en: 'Grading accuracy falls with the sensor, since a system is capped by its worst stage' },
        { th: 'ความแม่นยำลดลงเฉพาะที่ความเร็วสายพานสูง เพราะเวลาในการถ่ายภาพต่อผลสั้นลงด้วย', en: 'Accuracy falls only at high belt speed, since the exposure time per fruit shortens too' },
        { th: 'ความแม่นยำเพิ่มขึ้นเล็กน้อย เพราะกล้องที่คลาดเคลื่อนมากกว่ามักมีมุมมองภาพกว้างกว่า', en: 'Accuracy improves slightly, since a less precise camera usually has a wider field of view' },
        { th: 'ความแม่นยำการคัดเกรดยังคงเดิม เพราะคอมพิวเตอร์สามารถชดเชยความคลาดเคลื่อนด้วยซอฟต์แวร์', en: 'Grading accuracy holds, since the computer can compensate the error in software' }
      ],
      answer: 0,
      explain: {
        th: 'หลักการที่ต้องจำจากบทนี้คือระบบฉลาดได้ไม่เกินสิ่งที่มันวัดได้ ซอฟต์แวร์แก้ <em>อคติ</em> ที่เป็นระบบได้ด้วยการสอบเทียบ แต่แก้ความไม่แน่นอนแบบสุ่มไม่ได้ ถ้าเกณฑ์เกรดห่างกัน 10 mm ความคลาดเคลื่อน ±8 mm จะทำให้คัดผิดจำนวนมาก',
        en: 'The principle from this chapter is that a system can be no smarter than what it measures. Software can remove a systematic <em>bias</em> by calibration, but not random uncertainty. With grade bands 10 mm apart, ±8 mm will misclassify heavily.'
      }
    },
    {
      q: {
        th: 'หุ่นยนต์กำจัดวัชพืชตัวหนึ่งมีแขนกลพ่นสารติดตั้งบนรถที่วิ่งไปตามร่องปลูก การวิเคราะห์ระบบนี้ต้องใช้ความรู้ชุดใด',
        en: 'A weeding robot carries a spray arm on a vehicle that drives along the crop rows. Analysing it requires which combination?'
      },
      options: [
        { th: 'ทั้งจลนศาสตร์และการนำทาง แต่คิดแยกกันได้เสมอ เพราะสองระบบไม่มีผลต่อกันทางพลวัต', en: 'Both, but always separately, since the two subsystems do not interact dynamically' },
        { th: 'จลนศาสตร์ของแขนกลเพียงอย่างเดียว เพราะการพ่นสารเกิดขึ้นขณะที่รถหยุดนิ่งอยู่แล้ว', en: 'Arm kinematics alone, since spraying happens while the vehicle stands still' },
        { th: 'การนำทางของฐานเคลื่อนที่เพียงอย่างเดียว เพราะแขนกลเป็นเพียงอุปกรณ์ต่อพ่วงปลายทาง', en: 'Base navigation alone, since the arm is merely an end attachment' },
        { th: 'ทั้งจลนศาสตร์ของแขนกลและการนำทางของฐาน เพราะเป็นระบบแบบ mobile manipulator', en: 'Both arm kinematics and base navigation, as this is a mobile manipulator' }
      ],
      answer: 3,
      explain: {
        th: 'ตัวเลือก A ใกล้เคียงแต่ผิดในประเด็นสำคัญ: ฐานที่เคลื่อนที่ทำให้ระบบพิกัดอ้างอิงของแขนกลขยับตามไปด้วย ความคลาดเคลื่อนของการระบุตำแหน่งฐานจึงส่งผลต่อความแม่นยำปลายแขนโดยตรง สองระบบจึงต้องคิดร่วมกัน',
        en: 'Option A is close but wrong on the key point: a moving base moves the arm&rsquo;s reference frame with it, so error in locating the base propagates straight to the tool tip. The two must be reasoned about together.'
      }
    },
    {
      q: {
        th: 'ผู้ผลิตรายหนึ่งอ้างว่าเครื่องหยอดเมล็ดของตนเป็น “ระบบอัตโนมัติระดับ 4” โดยมีคุณสมบัติคือวิ่งตามแนว GNSS ที่วางไว้ล่วงหน้าและหยุดเองเมื่อเมล็ดหมด ข้อใดประเมินคำกล่าวอ้างนี้ได้ถูกต้อง',
        en: 'A vendor claims their seeder is “level 4 automation” because it follows a pre-planned GNSS line and stops when the hopper empties. How should that claim be assessed?'
      },
      options: [
        { th: 'สมเหตุสมผล เพราะเครื่องทำงานได้เองตลอดแปลงโดยไม่ต้องมีคนอยู่บนเครื่องตลอดเวลา', en: 'Reasonable, since it works through the field without anyone aboard throughout' },
        { th: 'เกินจริง เพราะยังไม่ได้แสดงว่าจัดการเหตุขัดข้องนอกเหนือแผนและกลับหัวแปลงเองได้', en: 'Overstated, since it has not shown it handles off-plan faults and its own headland turns' },
        { th: 'ต่ำกว่าความจริง เพราะการหยุดเองเมื่อเมล็ดหมดถือเป็นการตัดสินใจระดับที่สูงกว่านั้น', en: 'Understated, since stopping on an empty hopper is a higher order of decision than that' },
        { th: 'ประเมินไม่ได้ เพราะระดับความเป็นอัตโนมัติไม่มีเกณฑ์กลางที่ใช้เทียบกันได้ในทางปฏิบัติ', en: 'Unassessable, since autonomy levels have no common criteria to compare against' }
      ],
      answer: 1,
      explain: {
        th: 'ระดับ 4 ต้องทำงานจบทั้งแปลงเองรวมถึงการกลับหัวแปลงและการจัดการเหตุขัดข้อง คุณสมบัติที่อ้างมาตรงกับระดับ 2–3 เท่านั้น ส่วนข้อ D ผิด เพราะมีกรอบอ้างอิงอยู่ เช่น แนวทางตาม ISO 18497',
        en: 'Level 4 requires completing the whole field unaided, including headland turns and fault handling; the features described reach only level 2–3. Option D is wrong because reference frameworks do exist, such as the ISO 18497 approach.'
      }
    },
    {
      q: {
        th: 'แอนิเมชัน 1.1 แสดงว่าการเพิ่มความเร็วให้ผลต่อหุ่นยนต์สองแบบไม่เหมือนกัน ข้อใดสรุปสาเหตุได้ถูกต้อง',
        en: 'Animation 1.1 shows that raising speed affects the two robots differently. Which explains why?'
      },
      options: [
        { th: 'เพราะหุ่นยนต์ติดตั้งกับที่วัดผลด้วยจำนวนครั้งต่อเวลา ส่วนแบบเคลื่อนที่วัดด้วยสัดส่วนพื้นที่ที่ครอบคลุม', en: 'Because a fixed robot is measured in picks per unit time, a mobile one in area covered' },
        { th: 'เพราะหุ่นยนต์ติดตั้งกับที่มีกำลังขับสูงกว่า จึงได้ประโยชน์จากการเพิ่มความเร็วมากกว่าเสมอ', en: 'Because a fixed robot has more drive power and so always gains more from extra speed' },
        { th: 'เพราะหุ่นยนต์เคลื่อนที่มีความคลาดเคลื่อนสะสม ทำให้ความเร็วที่เพิ่มไม่ส่งผลต่อผลิตภาพเลย', en: 'Because a mobile robot&rsquo;s accumulated error means added speed does not raise output at all' },
        { th: 'เพราะปริมาตรทำงานของหุ่นยนต์ติดตั้งกับที่ขยายตามความเร็วที่เพิ่มขึ้นในแต่ละรอบการหยิบ', en: 'Because a fixed robot&rsquo;s workspace grows with speed on each pick cycle' }
      ],
      answer: 0,
      explain: {
        th: 'ประเด็นคือ <em>หน่วยวัดผลิตภาพ</em> ของสองแบบต่างกันโดยธรรมชาติของงาน ข้อ C ผิดเพราะความเร็วที่เพิ่มยังทำให้ครอบคลุมพื้นที่ได้เร็วขึ้นจริง และข้อ D ผิดเพราะปริมาตรทำงานเป็นสมบัติทางเรขาคณิตที่ไม่ขึ้นกับความเร็ว',
        en: 'The point is that the two have intrinsically different productivity measures. C is wrong because extra speed does cover ground faster, and D is wrong because workspace is a geometric property independent of speed.'
      }
    },
    {
      q: {
        th: 'ในการออกแบบระบบเก็บเกี่ยวมะเขือเทศ ทีมเลือกควบคุมแรงจับของมือจับเพิ่มเติมจากการควบคุมตำแหน่ง เหตุผลที่หนักแน่นที่สุดคือข้อใด',
        en: 'Designing a tomato harvester, the team adds grip-force control on top of position control. The strongest reason is which?'
      },
      options: [
        { th: 'เซนเซอร์แรงมีราคาถูกกว่าเอนโคเดอร์ตำแหน่ง จึงเป็นทางเลือกที่ประหยัดกว่าในระยะยาว', en: 'Force sensors cost less than position encoders, making them cheaper in the long run' },
        { th: 'การควบคุมแรงช่วยให้มือจับเคลื่อนที่เข้าหาผลได้เร็วขึ้น จึงเพิ่มจำนวนผลที่เก็บต่อนาที', en: 'Force control lets the gripper approach faster, raising the picks achieved per minute' },
        { th: 'ผลมะเขือเทศมีความแข็งแรงต่างกันในแต่ละผล แรงที่พอดีกับผลหนึ่งอาจทำให้ผลอื่นช้ำได้', en: 'Tomatoes differ in firmness, so a force right for one fruit may bruise another' },
        { th: 'การควบคุมตำแหน่งอย่างเดียวทำให้มือจับไม่สามารถปล่อยผลไม้ลงภาชนะได้อย่างถูกต้อง', en: 'Position control alone leaves the gripper unable to release fruit into the bin correctly' }
      ],
      answer: 2,
      explain: {
        th: 'โจทย์ของงานเกษตรคือความแปรผันทางชีวภาพ การควบคุมตำแหน่งสมมติว่าชิ้นงานมีขนาดและความแข็งเท่ากัน ซึ่งไม่จริง ความช้ำยังมองไม่เห็นในวันเก็บเกี่ยวแต่ปรากฏในอีกสามวัน จึงตรวจจับด้วยสายตาตอนทำงานไม่ได้',
        en: 'The agricultural problem is biological variability: position control assumes items of equal size and firmness, which they are not. Bruising also stays invisible on harvest day and shows three days later, so it cannot be caught by eye on the line.'
      }
    },
    {
      q: {
        th: 'โรงเรือนอัจฉริยะแห่งหนึ่งติดตั้งคอนโทรลเลอร์ราคาสูงที่ประมวลผลได้เร็วมาก แต่ใช้เซนเซอร์อุณหภูมิที่มีความคลาดเคลื่อน ±2 °C ข้อสรุปใดถูกต้อง',
        en: 'A smart greenhouse pairs an expensive, very fast controller with a temperature sensor accurate to ±2 °C. Which conclusion holds?'
      },
      options: [
        { th: 'ระบบจะควบคุมได้ละเอียดกว่า ±2 °C เพราะคอนโทรลเลอร์คำนวณชดเชยได้หลายครั้งต่อวินาที', en: 'The loop will hold better than ±2 °C, since the controller can compensate many times a second' },
        { th: 'ระบบจะควบคุมได้ไม่ดีกว่า ±2 °C เพราะไม่มีทางรู้ว่าอุณหภูมิจริงต่างจากค่าที่อ่านเท่าใด', en: 'The loop cannot do better than ±2 °C, since it cannot know how far truth sits from the reading' },
        { th: 'ระบบจะควบคุมได้ดีขึ้นหากเพิ่มความถี่ในการสุ่มสัญญาณจากเซนเซอร์ให้สูงกว่าเดิมสองเท่า', en: 'The loop improves if the sensor is sampled at twice the previous rate' },
        { th: 'ระบบจะควบคุมได้ดีขึ้นหากเปลี่ยนไปใช้อัลกอริทึมควบคุมที่ซับซ้อนกว่าการควบคุมแบบสัดส่วน', en: 'The loop improves by moving from proportional control to a more sophisticated algorithm' }
      ],
      answer: 1,
      explain: {
        th: 'คุณภาพของวงรอบถูกจำกัดด้วยคุณภาพของข้อมูลที่ป้อนเข้า การสุ่มเร็วขึ้นหรืออัลกอริทึมที่ฉลาดขึ้นไม่สร้างข้อมูลที่เซนเซอร์ไม่เคยมี การเฉลี่ยหลายค่าช่วยลด <em>สัญญาณรบกวนแบบสุ่ม</em> ได้ แต่ไม่ช่วยลดอคติที่เป็นระบบของเซนเซอร์',
        en: 'A loop is capped by the quality of the data entering it. Sampling faster or thinking harder cannot create information the sensor never had. Averaging reduces <em>random noise</em>, but not a systematic sensor bias.'
      }
    },
    {
      q: {
        th: 'เครื่องเก็บเกี่ยวเครื่องหนึ่งใช้งานเพียง 3 สัปดาห์ต่อปี ส่วนหุ่นยนต์ในโรงคัดบรรจุใช้งาน 250 วันต่อปี ข้อใดเป็นผลทางวิศวกรรมที่ตามมาจากความต่างนี้',
        en: 'A harvester runs three weeks a year while a packhouse robot runs 250 days. What engineering consequence follows?'
      },
      options: [
        { th: 'หุ่นยนต์ในโรงคัดบรรจุต้องมีระดับการป้องกัน IP สูงกว่า เพราะทำงานต่อเนื่องเป็นเวลานานกว่า', en: 'The packhouse robot needs a higher IP rating, because it runs continuously for longer' },
        { th: 'หุ่นยนต์ในโรงคัดบรรจุต้องใช้เซนเซอร์ที่แม่นยำกว่า เพราะจำนวนชิ้นงานที่ผ่านมีมากกว่า', en: 'The packhouse robot needs more accurate sensors, because more items pass through it' },
        { th: 'เครื่องเก็บเกี่ยวต้องออกแบบให้ทนทานมากกว่า เพราะชั่วโมงการใช้งานสะสมสูงกว่าอย่างชัดเจน', en: 'The harvester must be built more durably, since its accumulated hours are clearly higher' },
        { th: 'เครื่องเก็บเกี่ยวต้องคืนทุนจากชั่วโมงทำงานที่น้อยกว่ามาก จึงมีเพดานราคาที่ยอมรับได้ต่ำกว่า', en: 'The harvester must repay itself from far fewer hours, so its acceptable price ceiling is lower' }
      ],
      answer: 3,
      explain: {
        th: 'อัตราการใช้งานต่ำแปลว่ามีชั่วโมงสร้างรายได้น้อย ราคาที่ตลาดยอมจ่ายจึงต่ำลงตาม นี่คือเหตุผลเชิงเศรษฐศาสตร์ที่อธิบายว่าทำไมหุ่นยนต์เก็บเกี่ยวเชิงพาณิชย์จึงเกิดช้ากว่าหุ่นยนต์ในโรงคัดบรรจุ ส่วนข้อ C สลับเหตุผล เพราะชั่วโมงสะสมของเครื่องเก็บเกี่ยวต่ำกว่า',
        en: 'Low utilisation means few revenue-earning hours, which lowers the price the market will bear. This is the economics behind commercial harvesting robots arriving later than packhouse ones. Option C inverts the logic: the harvester accumulates fewer hours, not more.'
      }
    },
    {
      q: {
        th: 'ในแปลงเกษตรไทยที่มีขนาดเล็กและรูปร่างไม่สม่ำเสมอ แนวทางใดมีเหตุผลสนับสนุนทางวิศวกรรมมากที่สุด',
        en: 'For the small, irregularly shaped plots typical in Thailand, which approach has the strongest engineering case?'
      },
      options: [
        { th: 'ใช้หุ่นยนต์ขนาดเล็กหลายตัวทำงานร่วมกัน เพราะเข้าถึงแปลงรูปร่างไม่สม่ำเสมอได้ดีกว่า', en: 'Using several small robots together, since they reach irregular plots better' },
        { th: 'รอให้ต้นทุนหุ่นยนต์ขนาดใหญ่ลดลงก่อน เพราะเครื่องขนาดใหญ่ให้ผลิตภาพต่อเครื่องสูงกว่า', en: 'Waiting for large-robot costs to fall, since bigger machines give more output per unit' },
        { th: 'ใช้เครื่องจักรขนาดกลางที่คนขับ เพราะหุ่นยนต์ยังไม่เหมาะกับสภาพแวดล้อมแบบไทยในทุกกรณี', en: 'Using mid-size operated machinery, since robots never suit Thai conditions in any case' },
        { th: 'นำเข้าหุ่นยนต์ขนาดใหญ่แบบที่ใช้ในยุโรปมาใช้โดยตรง เพราะเป็นเทคโนโลยีที่พิสูจน์แล้ว', en: 'Importing large European-style robots as they are, since the technology is proven' }
      ],
      answer: 0,
      explain: {
        th: 'เครื่องขนาดใหญ่ต้องการแปลงที่ยาวและสม่ำเสมอเพื่อให้คุ้มกับเวลาที่เสียไปกับการกลับหัวแปลง แปลงเล็กจึงทำให้ประสิทธิภาพในแปลงต่ำลงมาก หุ่นยนต์เล็กหลายตัวยังมีข้อดีคือเสียหนึ่งตัวงานไม่หยุดทั้งระบบ ส่วนข้อ C กล่าวเหมารวมเกินไป',
        en: 'Large machines need long, regular runs to amortise turning time, so small plots gut their field efficiency. Several small robots also mean one failure does not halt everything. Option C overgeneralises.'
      }
    },
    {
      q: {
        th: 'ข้อใดเป็นเหตุผลที่ทำให้ความปลอดภัยของหุ่นยนต์ในแปลงเกษตรยากกว่าหุ่นยนต์ในโรงงาน ในเชิงหลักการออกแบบ',
        en: 'In design terms, why is safety harder for a field robot than for a factory robot?'
      },
      options: [
        { th: 'หุ่นยนต์ในแปลงไม่มีมาตรฐานความปลอดภัยรองรับ จึงไม่มีเกณฑ์ให้ออกแบบตามได้', en: 'Field robots have no safety standard to work to, leaving no criteria to design against' },
        { th: 'หุ่นยนต์ในแปลงใช้แรงดันไฟฟ้าสูงกว่า จึงมีความเสี่ยงทางไฟฟ้าต่อผู้ปฏิบัติงานมากกว่า', en: 'Field robots run at higher voltages, raising the electrical risk to operators' },
        { th: 'หุ่นยนต์ในแปลงเคลื่อนที่เร็วกว่า จึงมีพลังงานจลน์สูงกว่าเมื่อเกิดการชนกับสิ่งกีดขวาง', en: 'A field robot moves faster, carrying more kinetic energy into any collision' },
        { th: 'พื้นที่ทำงานล้อมรั้วไม่ได้ เครื่องจึงต้องตรวจจับคนและสัตว์ได้เองรอบคันตลอดเวลา', en: 'The working area cannot be fenced, so the machine itself must detect people and animals all round' }
      ],
      answer: 3,
      explain: {
        th: 'ในโรงงานใช้รั้วและม่านแสงแยกคนออกจากเขตอันตรายได้ ซึ่งเป็นมาตรการที่ง่ายและเชื่อถือได้ แปลงเปิดทำอย่างนั้นไม่ได้ ภาระจึงย้ายไปอยู่ที่ระบบรับรู้ของเครื่องเอง ส่วนข้อ A ผิดเพราะมี ISO 18497 รองรับอยู่แล้ว',
        en: 'A factory separates people from the hazard with fencing and light curtains — simple and dependable. An open field cannot, so the burden shifts onto the machine&rsquo;s own perception. Option A is wrong: ISO 18497 exists for exactly this.'
      }
    }
  ]
});
