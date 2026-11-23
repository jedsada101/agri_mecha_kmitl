/* ==========================================================================
   Chapter 8 — pre-test and post-test items
   Written to the course item-writing rules: options parallel in form and
   length, distractors drawn from real misconceptions, and questions that ask
   the learner to check a specification, read measured data or choose hardware.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch08-pre', {
  type: 'pre',
  chapter: 'ch08',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 8', en: 'Pre-test — Chapter 8' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการตรวจเงื่อนไขและการเลือกอุปกรณ์ ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around checking a specification and choosing hardware. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'งานย้ายต้นกล้าจากถาดเพาะลงถาดปลูก ต้นกล้าหมุนรอบแกนตั้งอย่างไรก็ได้ งานนี้ต้องการกี่องศาอิสระเป็นอย่างน้อย',
        en: 'Seedlings are moved between trays and may end up rotated any way about the vertical. How many degrees of freedom does the task need, at minimum?'
      },
      options: [
        { th: 'สององศาอิสระ เพราะถาดทั้งสองวางบนระนาบเดียวกัน จึงเคลื่อนที่ในระนาบเท่านั้น', en: 'Two, since both trays sit on one plane so the motion stays within that plane' },
        { th: 'สามองศาอิสระ เพราะต้องกำหนดเพียงตำแหน่งในสามมิติ ส่วนการวางตัวไม่มีข้อกำหนด', en: 'Three, since only a position in three dimensions is fixed and no attitude is required' },
        { th: 'สี่องศาอิสระ เพราะต้องกำหนดตำแหน่งสามแกนและมุมหมุนรอบแกนตั้งของต้นกล้าด้วย', en: 'Four, since three axes of position plus the rotation of the plant about the vertical are set' },
        { th: 'หกองศาอิสระ เพราะการหยิบวางวัตถุในปริภูมิสามมิติต้องใช้หกค่าเสมอไม่ว่างานใด', en: 'Six, since placing an object in three-dimensional space always takes six values' }
      ],
      answer: 1,
      explain: {
        th: 'ต้องยกต้นกล้าขึ้นพ้นถาดแล้ววางลง จึงต้องใช้แกนตั้งด้วย คำตอบจึงไม่ใช่สอง ส่วนหกใช้เมื่อต้อง <em>กำหนด</em> การวางตัว ไม่ใช่เมื่อการวางตัวเป็นอิสระ และมุมหมุนรอบแกนตั้งก็ไม่ต้องกำหนดเช่นกันเพราะโจทย์บอกว่าหมุนอย่างไรก็ได้',
        en: 'The seedling must be lifted clear of the tray and set down, so a vertical axis is needed and the answer is not two. Six applies when the attitude must be <em>specified</em>, not when it is free, and the rotation about the vertical need not be set either, since the brief says any orientation will do.'
      }
    },
    {
      q: {
        th: 'โรงเรือนมีทางเดินแคบและต้องการให้หุ่นยนต์ทำงานครอบคลุมแปลงปลูกสี่เหลี่ยมพอดี โครงร่างใดเหมาะที่สุด',
        en: 'A greenhouse has a narrow aisle and wants a robot to cover a rectangular bed exactly. Which configuration suits best?'
      },
      options: [
        { th: 'SCARA เพราะเร็วและเที่ยงตรงสูงที่สุดในกลุ่มหุ่นยนต์ที่ใช้กันในงานเกษตร', en: 'SCARA, the fastest and most repeatable of the arms used in agricultural work' },
        { th: 'เดลต้า เพราะมีมวลเคลื่อนที่น้อยที่สุดจึงเร่งได้แรงที่สุดในพื้นที่จำกัด', en: 'Delta, with the least mass in motion and so the hardest acceleration in a confined space' },
        { th: 'อาร์ติคูเลต เพราะให้พื้นที่ทำงานกว้างที่สุดต่อขนาดของตัวหุ่นยนต์ที่ติดตั้งไป', en: 'Articulated, which gives the largest working area for the size of robot installed' },
        { th: 'คาร์ทีเซียน เพราะเป็นโครงร่างเดียวที่ปริภูมิทำงานเป็นกล่องสี่เหลี่ยมและไม่มีรูกลาง', en: 'Cartesian, the only configuration whose workspace is a rectangular box with no hole' }
      ],
      answer: 3,
      explain: {
        th: 'ตัวเลือกที่เหลือทุกตัวให้ปริภูมิทำงานเป็นวงแหวนหรือโดม ซึ่งมีบริเวณกลางที่เอื้อมไม่ถึงและมีส่วนที่ล้นออกนอกแปลง การทับซ้อนกับแปลงสี่เหลี่ยมจึงต้องซื้อระยะเอื้อมเกินความจำเป็นมาก ความเร็วและความเที่ยงตรงที่สูงกว่าไม่ช่วยอะไรถ้ารูปร่างของปริภูมิไม่เข้ากับงาน',
        en: 'Every other option gives a ring or a dome, with an unreachable centre and parts that spill outside the bed, so matching a rectangle means buying far more reach than needed. Higher speed and repeatability help nothing when the shape of the workspace does not fit the job.'
      }
    },
    {
      q: {
        th: 'แค็ตตาล็อกระบุความเที่ยงตรง ±0.02 mm แต่เมื่อสั่งให้ไปที่พิกัดหนึ่ง หุ่นยนต์หยุดห่างจากจุดนั้น 0.9 mm ทุกครั้ง ข้อสรุปใดถูกต้อง',
        en: 'A catalogue quotes ±0.02 mm repeatability, yet the robot stops 0.9 mm from a commanded coordinate every single time. Which conclusion is right?'
      },
      options: [
        { th: 'เป็นเรื่องปกติ เพราะตัวเลขในแค็ตตาล็อกคือความเที่ยงตรง ส่วน 0.9 mm คือความแม่นยำ', en: 'This is normal: the catalogue figure is repeatability, while 0.9 mm is the accuracy' },
        { th: 'เซนเซอร์ตัวเข้ารหัสที่ข้อต่อเสื่อม จึงรายงานมุมคลาดไปเท่ากันทุกครั้งที่สั่งงาน', en: 'A joint encoder has degraded, reporting the same wrong angle on every command' },
        { th: 'แค็ตตาล็อกเกินจริง เพราะความเที่ยงตรงที่วัดได้จริงคือ 0.9 mm ไม่ใช่ 0.02 mm ตามที่อ้าง', en: 'The catalogue overstates it: the real repeatability is 0.9 mm, not the 0.02 mm claimed' },
        { th: 'หุ่นยนต์ชำรุด เพราะความคลาดเคลื่อนขนาดนี้เกินกว่าที่โครงสร้างปกติจะเกิดขึ้นเองได้', en: 'The robot is faulty: an error this large is beyond what a sound structure produces' }
      ],
      answer: 0,
      explain: {
        th: 'คำว่า “ทุกครั้ง” คือกุญแจ ความคลาดเคลื่อนที่ซ้ำเดิมเสมอหมายความว่าการกระจายยังเล็กอยู่ จึงยังเที่ยงตรงตามที่อ้าง สิ่งที่แย่คือค่าเฉลี่ยไปเกาะผิดที่ ซึ่งคือความแม่นยำที่แค็ตตาล็อกไม่เคยระบุไว้ และมักแย่กว่าหลายสิบเท่า',
        en: 'The words “every single time” are the key: an error that repeats exactly means the spread is still small, so the repeatability claim holds. What is poor is where the mean sits — the accuracy, which no catalogue quotes and which is typically tens of times worse.'
      }
    },
    {
      q: {
        th: 'หุ่นยนต์พิกัดน้ำหนัก 10 kg ถูกใช้ยกกระสอบ 7 kg ด้วยมือจับที่ยื่นออกไปไกล แต่ข้อมือเสียหายภายในไม่กี่เดือน สาเหตุที่น่าจะเป็นที่สุดคือข้อใด',
        en: 'A robot rated at 10 kg lifts a 7 kg sack on a long gripper, and its wrist fails within months. The likeliest cause is which?'
      },
      options: [
        { th: 'กระสอบเป็นวัตถุนิ่มที่เปลี่ยนรูปได้ ทำให้จุดศูนย์ถ่วงแกว่งและสร้างแรงกระชากที่ข้อมือ', en: 'A sack deforms, so its centre of gravity swings and shocks the wrist' },
        { th: 'ความเร่งที่ใช้สูงเกินไป ทำให้แรงที่กระทำกับข้อมือมากกว่าน้ำหนักของกระสอบเองหลายเท่า', en: 'The acceleration used was too high, loading the wrist several times the sack&rsquo;s own weight' },
        { th: 'โมเมนต์ที่ข้อมือเกินพิกัด เพราะมวลอยู่ห่างหน้าแปลนมาก แม้มวลรวมยังไม่เกินพิกัด', en: 'The wrist moment exceeded its rating, the mass being far from the flange although within payload' },
        { th: 'มวล 7 kg ใกล้พิกัด 10 kg เกินไป ควรใช้ที่ไม่เกินครึ่งหนึ่งของพิกัดเพื่อความทนทาน', en: '7 kg is too near the 10 kg rating; no more than half the rating should be used for durability' }
      ],
      answer: 2,
      explain: {
        th: 'ทั้งการแกว่งของจุดศูนย์ถ่วงและความเร่งที่สูงล้วนทำให้โมเมนต์แย่ลงจริง แต่ทั้งสองเป็นตัวขยายของสาเหตุเดียวกัน คือระยะจากหน้าแปลนที่มากเกินไป ส่วนกฎที่ว่าอย่าใช้เกินครึ่งของพิกัดไม่มีอยู่ในข้อกำหนดใด ๆ สิ่งที่มีอยู่จริงคือเงื่อนไขโมเมนต์ที่ต้องตรวจแยกจากมวล',
        en: 'A swinging centre of gravity and high acceleration both do worsen the moment, but each only amplifies the same root cause: too great a distance from the flange. No specification contains a rule against using more than half the rating; what does exist is a moment limit to be checked separately from mass.'
      }
    },
    {
      q: {
        th: 'ติดมือจับยาว 150 mm เข้าที่ข้อมือแล้วสั่งหุ่นยนต์หมุนรอบเครื่องมือ แต่ปลายมือจับเหวี่ยงออกไปไกลมาก สาเหตุคือข้อใด',
        en: 'A 150 mm gripper is fitted and the robot is told to rotate about the tool, but the gripper tip swings far away. Why?'
      },
      options: [
        { th: 'มือจับหนักเกินไป ทำให้ข้อต่อข้อมือเสียรูปและปลายมือจับเลื่อนออกจากตำแหน่งที่สั่ง', en: 'The gripper is heavy enough to deflect the wrist, displacing the tip from where it was sent' },
        { th: 'เลือกเฟรมอ้างอิงผิด ควรเปลี่ยนไปใช้เฟรมฐานแทนเฟรมโลกก่อนสั่งการหมุนทุกครั้ง', en: 'The wrong frame is selected; switch from world to base before every rotation command' },
        { th: 'ความเร็วในการหมุนสูงเกินไปสำหรับเครื่องมือที่ยาว ควรลดความเร็วลงก่อนสั่งหมุน', en: 'The rotation speed is too high for a long tool and should be reduced before rotating' },
        { th: 'ยังไม่ได้ตั้งค่าเครื่องมือ ระบบจึงหมุนรอบหน้าแปลนข้อมือแทนที่จะหมุนรอบปลายมือจับ', en: 'No tool has been defined, so the system rotates about the flange rather than the tip' }
      ],
      answer: 3,
      explain: {
        th: 'ก่อนตั้งค่าเครื่องมือ ตัวควบคุมถือว่า TCP อยู่กลางหน้าแปลนพอดี การหมุนจึงเกิดรอบจุดนั้น และปลายมือจับที่ห่างออกไป 150 mm จะกวาดเป็นส่วนโค้งรัศมี 150 mm ความเร็วและน้ำหนักไม่ได้ทำให้ <em>จุดหมุน</em> เปลี่ยน และการเลือกเฟรมฐานหรือเฟรมโลกก็ไม่เกี่ยวกับจุดหมุนของเครื่องมือ',
        en: 'Until a tool is defined the controller places the TCP at the centre of the flange, so the rotation happens there and a tip 150 mm away sweeps an arc of that radius. Neither speed nor weight changes where the <em>centre of rotation</em> is, and choosing base or world has nothing to do with it either.'
      }
    },
    {
      q: {
        th: 'ทีมหนึ่งเสนอเปลี่ยนตัวเข้ารหัสจาก 2048 เป็น 8192 นับต่อรอบ เพื่อให้หุ่นยนต์วางของได้แม่นขึ้น ข้อใดประเมินข้อเสนอนี้ได้ถูกต้องที่สุด',
        en: 'A team proposes changing the encoder from 2048 to 8192 counts per revolution so the robot places parts more precisely. Which assessment is soundest?'
      },
      options: [
        { th: 'ได้ผลบางส่วน เพราะจะช่วยเฉพาะการเคลื่อนที่ระยะสั้น แต่ไม่ช่วยการเคลื่อนที่ระยะไกล', en: 'It will partly work, helping short moves while leaving the longer ones unchanged' },
        { th: 'ไม่ได้ผล เพราะความละเอียดละเอียดกว่าความเที่ยงตรงอยู่แล้ว ตัวจำกัดคือกลไกไม่ใช่สัญญาณ', en: 'It will not work: resolution is already finer than repeatability, the limit being mechanical' },
        { th: 'ไม่ได้ผล เพราะตัวควบคุมอ่านตัวเข้ารหัสด้วยคาบเวลาคงที่ จึงไม่รับค่าที่ละเอียดขึ้นไปใช้', en: 'It will not work, the controller sampling at a fixed period and ignoring the finer value' },
        { th: 'ได้ผลชัดเจน เพราะความละเอียดที่สูงขึ้นสี่เท่าจะทำให้ความเที่ยงตรงดีขึ้นสี่เท่าตามไปด้วย', en: 'It will clearly work, four times the resolution giving four times the repeatability' }
      ],
      answer: 1,
      explain: {
        th: 'ตัวอย่างในหัวข้อ 8.4 แสดงว่าความละเอียดราว 5 µm ขณะที่ความเที่ยงตรงที่ประกาศคือ ±20 µm ส่วนต่างนี้มาจากแบ็กแลช การยืดหยุ่น และอุณหภูมิ ไม่ใช่จากจำนวนนับ ตัวควบคุมรับค่าที่ละเอียดขึ้นได้จริง เพียงแต่เอาไปใช้ไม่ได้เพราะกลไกเป็นคอขวด',
        en: 'The example in §8.4 shows a resolution near 5 µm against a quoted repeatability of ±20 µm, and the gap comes from backlash, compliance and temperature rather than from the count. The controller does accept the finer value; it simply cannot use it while the mechanics are the bottleneck.'
      }
    },
    {
      q: {
        th: 'สายคัดบรรจุมีระยะหยิบ–วางเพียง 280 mm ต้องการ 70 ชิ้นต่อนาที หุ่นยนต์แบบใดน่าจะทำได้ และเพราะเหตุใด',
        en: 'A packing line has a 280 mm pick-and-place move and needs 70 picks a minute. Which robot is likely to manage, and why?'
      },
      options: [
        { th: 'ตัวใดก็ได้ที่มีความเร็วสูงสุดเกิน 5 m/s เพราะความเร็วเป็นตัวกำหนดอัตราผลิตโดยตรง', en: 'Any robot whose top speed exceeds 5 m/s, since speed sets the throughput directly' },
        { th: 'อาร์ติคูเลตหกแกน เพราะมีกำลังมากที่สุดและควบคุมการวางตัวของชิ้นงานได้ครบทุกทิศทาง', en: 'A six-axis articulated arm, the most powerful and able to control attitude in every direction' },
        { th: 'เดลต้าสี่แกน เพราะในระยะสั้นเวลารอบขึ้นกับความเร่ง และเดลต้ามีมวลเคลื่อนที่น้อยที่สุด', en: 'A four-axis delta: over a short move the time depends on acceleration, and a delta moves least mass' },
        { th: 'คาร์ทีเซียนสามแกน เพราะเคลื่อนที่ตามแกนตรงจึงเดินทางเป็นระยะสั้นที่สุดระหว่างสองจุด', en: 'A three-axis Cartesian, moving along straight axes and so taking the shortest route between points' }
      ],
      answer: 2,
      explain: {
        th: 'ที่ระยะ 280 mm การเคลื่อนที่อยู่ในกรณีสามเหลี่ยมตามสมการ (8.14) คือเร่งขึ้นแล้วเบรกทันทีโดยไม่เคยถึงความเร็วสูงสุด ตัวเลขความเร็วสูงสุดจึงไม่มีความหมาย และคาร์ทีเซียนที่มวลโครงสร้างมากก็เร่งได้น้อยกว่าแม้เส้นทางจะตรง',
        en: 'Over 280 mm the move is triangular by equation (8.14): it accelerates and brakes without ever reaching top speed, so the speed figure means nothing. A Cartesian gantry, with its heavy structure, accelerates less even though its path is straight.'
      }
    },
    {
      q: {
        th: 'ผู้ขายเสนอ “หุ่นยนต์ร่วมปฏิบัติงาน” โดยบอกว่าไม่ต้องมีรั้วและไม่ต้องประเมินความเสี่ยง ข้อใดเป็นการตอบที่ถูกต้อง',
        en: 'A vendor offers a “collaborative robot”, saying no fence and no risk assessment are needed. Which reply is correct?'
      },
      options: [
        { th: 'ไม่ถูกทั้งสองข้อ เพราะความปลอดภัยมาจากการใช้งานที่ผ่านการประเมินแล้ว ไม่ใช่จากตัวเครื่อง', en: 'Wrong on both counts: safety comes from an assessed application, not from the machine' },
        { th: 'ไม่ถูกเรื่องรั้ว เพราะมาตรฐาน ISO 10218-2 บังคับให้ทุกเซลล์ที่มีหุ่นยนต์ต้องมีรั้วล้อมรอบ', en: 'Wrong about the fence: ISO 10218-2 requires every robot cell to be fenced' },
        { th: 'ถูกต้องตามมาตรฐาน เพราะหุ่นยนต์ประเภทนี้ได้รับการรับรองความปลอดภัยมาจากโรงงานแล้ว', en: 'Correct under the standards, since such robots arrive safety-certified from the factory' },
        { th: 'ถูกเฉพาะเรื่องรั้ว แต่ยังต้องประเมินความเสี่ยงเพราะเครื่องมือปลายแขนอาจมีคมหรือร้อน', en: 'Right about the fence, but a risk assessment is still needed since a tool may be sharp or hot' }
      ],
      answer: 0,
      explain: {
        th: 'การประเมินความเสี่ยงเป็นข้อกำหนดของ ISO 10218-2 ที่ยกเว้นไม่ได้ และผลการประเมินเป็นสิ่งที่ตัดสินว่าต้องมีรั้วหรือไม่ จึงไม่มีมาตรฐานใดบังคับรั้วทุกกรณี ส่วนขีดจำกัดแรงใน ISO/TS 15066 เป็นเงื่อนไขของ <em>การใช้งาน</em> ที่ต้องพิสูจน์ด้วยการวัด ไม่ใช่คุณสมบัติที่ติดมากับเครื่อง',
        en: 'A risk assessment is a requirement of ISO 10218-2 from which there is no exemption, and its outcome is what decides whether a fence is needed, so no standard mandates one in every case. The force limits of ISO/TS 15066 are conditions on the <em>application</em>, to be proven by measurement, not properties the machine brings with it.'
      }
    }
  ]
});

AMRQuiz.mount('ch08-post', {
  type: 'post',
  chapter: 'ch08',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 8', en: 'Post-test — Chapter 8' },
  intro: {
    th: 'สิบข้อ เน้นการคำนวณตรวจเงื่อนไข การอ่านข้อมูลวัด และการเลือกอุปกรณ์ เกณฑ์ผ่าน 70%',
    en: 'Ten items on checking a specification by calculation, reading measured data and choosing hardware. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'หุ่นยนต์ SCARA มี \\( L_1 = 400 \\) mm และ \\( L_2 = 150 \\) mm พื้นที่ปริภูมิทำงานในระนาบเป็นเท่าใด',
        en: 'A SCARA has \\( L_1 = 400 \\) mm and \\( L_2 = 150 \\) mm. What is its planar workspace area?'
      },
      options: [
        { th: '0.38 m² จากการหักรูกลางออกแล้วหารด้วยสอง เพราะแขนกวาดได้เพียงครึ่งวง', en: '0.38 m², deducting the hole then halving, the arm sweeping only half a circle' },
        { th: '0.95 m² จากการคิดวงกลมรัศมีเอื้อมสูงสุดทั้งวง โดยไม่หักรูกลางที่เอื้อมไม่ถึงออก', en: '0.95 m², taking the whole circle of maximum reach without deducting the hole' },
        { th: '0.75 m² จากการหักพื้นที่ของรูกลางออกจากวงกลมรัศมีเอื้อมสูงสุด ตามสมการ (8.3)', en: '0.75 m², deducting the hole from the circle of maximum reach, by equation (8.3)' },
        { th: '0.28 m² จากการยกกำลังสองของผลต่างระหว่างรัศมีสองค่าแล้วคูณด้วยค่าพาย', en: '0.28 m², squaring the difference of the two radii and multiplying by pi' }
      ],
      answer: 2,
      explain: {
        th: 'จากสมการ (8.2): \\( R_{\\max} = 550 \\) mm, \\( R_{\\min} = 250 \\) mm แล้วสมการ (8.3) ให้ \\( \\pi(550^2 - 250^2) = 7.54\\times10^{5} \\) mm² = 0.75 m² ความผิดพลาดที่พบบ่อยที่สุดคือลืมหักรูกลาง ส่วนการยกกำลังสองของผลต่างให้ค่าที่น้อยกว่าความจริงมาก เพราะ \\( (a-b)^2 \\ne a^2 - b^2 \\)',
        en: 'Equation (8.2) gives \\( R_{\\max} = 550 \\) mm and \\( R_{\\min} = 250 \\) mm, so equation (8.3) gives \\( \\pi(550^2 - 250^2) = 7.54\\times10^{5} \\) mm² = 0.75 m². The commonest slip is forgetting the hole, while squaring the difference falls far short because \\( (a-b)^2 \\ne a^2 - b^2 \\).'
      }
    },
    {
      q: {
        th: 'หุ่นยนต์มี \\( M_{\\text{rated}} = 15 \\) N·m มือจับมวล 1.2 kg จุดศูนย์ถ่วงห่างหน้าแปลน 80 mm จะจับชิ้นงาน 3.0 kg ได้ไกลจากหน้าแปลนไม่เกินเท่าใด',
        en: 'A robot has \\( M_{\\text{rated}} = 15 \\) N·m and a 1.2 kg gripper with its centre of gravity 80 mm out. How far from the flange may a 3.0 kg part be held?'
      },
      options: [
        { th: '478 mm จากการหักโมเมนต์ของมือจับออกจากพิกัดก่อน แล้วจึงหารด้วยน้ำหนักชิ้นงาน', en: '478 mm, deducting the gripper&rsquo;s own moment first, then dividing by the part&rsquo;s weight' },
        { th: '510 mm จากการหารพิกัดโมเมนต์ด้วยน้ำหนักชิ้นงานโดยไม่คิดโมเมนต์ของมือจับเลย', en: '510 mm, dividing the rating by the part&rsquo;s weight and ignoring the gripper entirely' },
        { th: '364 mm จากการรวมมวลของมือจับกับชิ้นงานเข้าด้วยกันแล้วถือว่าอยู่ที่ระยะเดียวกัน', en: '364 mm, adding the two masses and treating them as acting at one distance' },
        { th: '239 mm จากการเผื่อความปลอดภัยสองเท่าเพิ่มเข้าไปในพิกัดโมเมนต์ที่ผู้ผลิตให้มา', en: '239 mm, applying a further factor of two to the manufacturer&rsquo;s moment rating' }
      ],
      answer: 0,
      explain: {
        th: 'จากสมการ (8.11) โมเมนต์ของมือจับคือ \\( (1.2)(9.81)(0.080) = 0.94 \\) N·m เหลือให้ชิ้นงาน \\( 15 - 0.94 = 14.06 \\) N·m จึงได้ \\( d = 14.06/((3.0)(9.81)) = 0.478 \\) m การละโมเมนต์ของมือจับทำให้ประเมินเกินไป 7% ซึ่งกินส่วนเผื่อทั้งหมด ส่วนการรวมมวลเข้าด้วยกันผิดเพราะสองก้อนอยู่ที่ระยะต่างกัน',
        en: 'By equation (8.11) the gripper contributes \\( (1.2)(9.81)(0.080) = 0.94 \\) N·m, leaving \\( 15 - 0.94 = 14.06 \\) N·m, so \\( d = 14.06/((3.0)(9.81)) = 0.478 \\) m. Ignoring the gripper overstates this by 7%, which consumes the whole margin, and adding the masses is wrong because they act at different distances.'
      }
    },
    {
      q: {
        th: 'วัดตำแหน่งที่หุ่นยนต์หยุด 20 ครั้ง ได้ \\( \\sigma = 0.008 \\) mm และค่าเฉลี่ยห่างจากจุดที่สั่ง 0.14 mm ตัวเลขใดที่ควรนำไปเทียบกับแค็ตตาล็อก และเป็นเท่าใด',
        en: 'Twenty landings give \\( \\sigma = 0.008 \\) mm with the mean 0.14 mm from the commanded point. Which figure should be compared with the catalogue, and what is it?'
      },
      options: [
        { th: '±0.024 mm คือความแม่นยำ ซึ่งคำนวณจากการกระจายรอบจุดที่สั่งตามสมการ (8.7)', en: '±0.024 mm, the accuracy, computed from the spread about the point commanded' },
        { th: '0.148 mm คือผลรวมของการกระจายกับระยะเยื้อง ซึ่งเป็นความคลาดเคลื่อนรวมที่แท้จริง', en: '0.148 mm, the spread added to the offset, being the robot&rsquo;s true total error' },
        { th: '0.14 mm คือความเที่ยงตรง เพราะเป็นระยะที่หุ่นยนต์พลาดจากจุดที่สั่งไปทุกครั้ง', en: '0.14 mm, the repeatability, being how far the robot misses the commanded point every time' },
        { th: '±0.024 mm คือความเที่ยงตรง ซึ่งคำนวณจากการกระจายรอบค่าเฉลี่ยของกลุ่มจุดเอง', en: '±0.024 mm, the repeatability, computed from the spread about the cluster&rsquo;s own mean' }
      ],
      answer: 3,
      explain: {
        th: 'แค็ตตาล็อกให้ความเที่ยงตรง ซึ่งสมการ (8.6) กำหนดเป็น \\( \\pm 3\\sigma = \\pm 0.024 \\) mm และวัดรอบ <em>ค่าเฉลี่ยของกลุ่มจุดเอง</em> ส่วน 0.14 mm คือความแม่นยำตามสมการ (8.7) ซึ่งเป็นคนละปริมาณ การบวกสองค่าเข้าด้วยกันไม่มีความหมายเพราะค่าหนึ่งเป็นการกระจายและอีกค่าเป็นการเยื้อง',
        en: 'The catalogue quotes repeatability, which equation (8.6) defines as \\( \\pm 3\\sigma = \\pm 0.024 \\) mm, measured about <em>the cluster&rsquo;s own mean</em>. The 0.14 mm is the accuracy of equation (8.7), a different quantity, and adding the two means nothing, one being a spread and the other an offset.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 8.2 เมื่อกดปุ่มสอบเทียบโดยไม่แตะสไลเดอร์การกระจาย สิ่งที่เกิดขึ้นกับตัวเลขทั้งสองคือข้อใด',
        en: 'In Animation 8.2, pressing Calibrated without touching the scatter slider does what to the two figures?'
      },
      options: [
        { th: 'ทั้งสองค่าคงเดิม เพราะการสอบเทียบเปลี่ยนเพียงค่าที่แสดงบนจอ ไม่ได้เปลี่ยนการเคลื่อนที่', en: 'Both hold, calibration changing only what is displayed rather than the motion' },
        { th: 'ความแม่นยำดีขึ้นจนเกือบศูนย์ ส่วนความเที่ยงตรงคงเดิม เพราะขนาดของกลุ่มจุดไม่เปลี่ยน', en: 'Accuracy improves to near zero while repeatability holds, the cluster&rsquo;s size being unchanged' },
        { th: 'ความเที่ยงตรงดีขึ้นจนเกือบศูนย์ ส่วนความแม่นยำคงเดิม เพราะกลุ่มจุดยังอยู่ที่เดิม', en: 'Repeatability improves to near zero while accuracy holds, the cluster staying where it was' },
        { th: 'ทั้งสองค่าดีขึ้นในสัดส่วนเท่ากัน เพราะการสอบเทียบแก้ความคลาดเคลื่อนทุกชนิดพร้อมกัน', en: 'Both improve in equal proportion, calibration correcting every kind of error at once' }
      ],
      answer: 1,
      explain: {
        th: 'การสอบเทียบแก้อคติเชิงระบบ คือย้ายกลุ่มจุดทั้งก้อนให้มาทับจุดที่สั่ง แต่ไม่ได้ทำให้ก้อนเล็กลงเลย เพราะการกระจายมาจากแบ็กแลชและสัญญาณรบกวนที่สุ่มในแต่ละครั้ง สิ่งเดียวที่ลดการกระจายได้คือการแก้กลไกหรือลดความเร็ว ไม่ใช่การสอบเทียบ',
        en: 'Calibration removes the systematic bias, shifting the whole cluster onto the commanded point without shrinking it at all, since the spread comes from backlash and noise that vary from trial to trial. The only things that shrink it are mechanical repair or lower speed, not calibration.'
      }
    },
    {
      q: {
        th: 'ระยะหยิบ–วาง 250 mm ผู้ขายสองรายเสนอหุ่นยนต์ที่ความเร่งเท่ากัน 20 m/s² แต่ความเร็วสูงสุด 4 m/s กับ 8 m/s ข้อใดถูกต้อง',
        en: 'For a 250 mm move, two vendors offer robots of equal 20 m/s² acceleration but 4 m/s and 8 m/s top speed. Which is right?'
      },
      options: [
        { th: 'ทั้งคู่ใช้เวลาเท่ากันราว 0.22 s เพราะระยะสั้นเกินกว่าที่ตัวใดจะเร่งถึงความเร็วสูงสุด', en: 'Both take about 0.22 s, the move being too short for either to reach top speed' },
        { th: 'สรุปไม่ได้ เพราะยังขาดข้อมูลมวลของชิ้นงานและมือจับที่จะนำมาคำนวณเวลารอบ', en: 'Nothing can be said: the masses of part and gripper are needed to compute the time' },
        { th: 'ตัวที่ 8 m/s เร็วกว่าราวสองเท่า เพราะเวลารอบแปรผกผันกับความเร็วสูงสุดโดยตรง', en: 'The 8 m/s robot is about twice as fast, cycle time varying inversely with top speed' },
        { th: 'ตัวที่ 8 m/s เร็วกว่าราว 30% เพราะยังได้ประโยชน์จากความเร็วที่สูงกว่าอยู่บางส่วน', en: 'The 8 m/s robot is about 30% faster, still gaining part of the benefit of its speed' }
      ],
      answer: 0,
      explain: {
        th: 'สมการ (8.14) ให้เกณฑ์ \\( v^2/a \\) เท่ากับ 0.80 m และ 3.20 m ตามลำดับ ซึ่งทั้งสองค่ามากกว่าระยะ 0.25 m จึงอยู่ในกรณีสามเหลี่ยมทั้งคู่ และได้ \\( t = 2\\sqrt{0.25/20} = 0.22 \\) s เท่ากันพอดี ข้อมูลมวลไม่จำเป็นเพราะความเร่งที่ให้มาเป็นค่าที่หุ่นยนต์ทำได้พร้อมภาระแล้ว',
        en: 'Equation (8.14) gives thresholds \\( v^2/a \\) of 0.80 m and 3.20 m, both above the 0.25 m move, so both are triangular and \\( t = 2\\sqrt{0.25/20} = 0.22 \\) s in each case. The masses are not needed, the quoted acceleration already being what the robot achieves under load.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 8.1 ตั้ง \\( L_1 = 600 \\) mm และ \\( L_2 = 400 \\) mm ไว้คงที่ แล้วสลับจาก PP เป็น RR ผลที่เห็นคือข้อใด',
        en: 'In Animation 8.1, holding \\( L_1 = 600 \\) mm and \\( L_2 = 400 \\) mm and switching from PP to RR shows what?'
      },
      options: [
        { th: 'พื้นที่เท่าเดิม เพราะความยาวลิงก์เท่าเดิม เปลี่ยนเพียงรูปร่างจากสี่เหลี่ยมเป็นวงกลม', en: 'The area is unchanged, the links being the same length; only the shape changes' },
        { th: 'พื้นที่เล็กลง เพราะข้อต่อหมุนทำให้เสียช่วงการเคลื่อนที่ไปกับการหมุนรอบตัวเองบางส่วน', en: 'The area shrinks, rotary joints losing part of their travel to turning on themselves' },
        { th: 'พื้นที่โตขึ้นราวสิบสองเท่า และเกิดรูกลางรัศมี 200 mm ที่ปลายเครื่องมือเอื้อมไม่ถึง', en: 'The area grows about twelvefold, and a 200 mm hole appears that the tool cannot reach' },
        { th: 'พื้นที่โตขึ้นราวสองเท่า และรูปร่างเปลี่ยนจากสี่เหลี่ยมเป็นวงแหวนโดยไม่มีรูกลางเกิดขึ้น', en: 'The area roughly doubles, becoming a ring with no hole at its centre' }
      ],
      answer: 2,
      explain: {
        th: 'PP ให้สี่เหลี่ยม \\( 600 \\times 400 = 0.24 \\) m² ส่วน RR ให้วงแหวนตามสมการ (8.3) คือ \\( \\pi(1000^2 - 200^2) = 3.02 \\) m² ซึ่งโตขึ้น 12.6 เท่า โดยแลกมากับรูกลางรัศมี \\( \\lvert L_1 - L_2 \\rvert = 200 \\) mm ที่หายไป นี่คือการแลกระหว่างพื้นที่กับความต่อเนื่องของปริภูมิทำงาน',
        en: 'PP gives a rectangle of \\( 600 \\times 400 = 0.24 \\) m², while RR gives the annulus of equation (8.3), \\( \\pi(1000^2 - 200^2) = 3.02 \\) m² — 12.6 times larger, bought at the cost of a hole of radius \\( \\lvert L_1 - L_2 \\rvert = 200 \\) mm. That is the trade between area and a workspace without gaps.'
      }
    },
    {
      q: {
        th: 'ยกกล่องผลไม้ 3.5 kg ด้วยถ้วยดูดเส้นผ่านศูนย์กลาง 30 mm ที่ \\( \\Delta p = 55 \\) kPa เร่ง \\( a = 2g \\) ใช้ \\( S = 2 \\) ต้องใช้ถ้วยกี่ใบ',
        en: 'A 3.5 kg fruit carton is lifted by 30 mm cups at \\( \\Delta p = 55 \\) kPa, accelerating at \\( a = 2g \\) with \\( S = 2 \\). How many cups?'
      },
      options: [
        { th: 'สามใบ จากการคิดน้ำหนักและความเร่งครบ แต่ไม่ได้คูณตัวประกอบความปลอดภัยเข้าไป', en: 'Three, from weight and acceleration together but without the safety factor' },
        { th: 'หกใบ จากการคิดน้ำหนัก ความเร่ง และตัวประกอบความปลอดภัยครบตามสมการ (8.16)', en: 'Six, from weight, acceleration and the safety factor together, by equation (8.16)' },
        { th: 'สิบสองใบ จากการคูณตัวประกอบความปลอดภัยซ้ำอีกครั้งหลังคำนวณจำนวนถ้วยเสร็จแล้ว', en: 'Twelve, from applying the safety factor a second time after the count was done' },
        { th: 'สองใบ จากการคิดเฉพาะน้ำหนักของกล่องคูณตัวประกอบความปลอดภัย โดยไม่คิดความเร่ง', en: 'Two, from the weight times the safety factor with no allowance for acceleration' }
      ],
      answer: 1,
      explain: {
        th: 'พื้นที่ถ้วยคือ \\( \\pi(0.015)^2 = 7.07\\times10^{-4} \\) m² จึงได้ \\( F_{\\text{cup}} = 38.9 \\) N ส่วนแรงที่ต้องการคือ \\( (3.5)(29.43)(2) = 206 \\) N ดังนั้น \\( n \\ge 5.3 \\) คือหกใบ การละความเร่งทิ้งทำให้ได้เพียงสองใบ ซึ่งน้อยกว่าที่ต้องการสามเท่าและเป็นเหตุให้กล่องหลุดกลางอากาศ',
        en: 'A cup area of \\( \\pi(0.015)^2 = 7.07\\times10^{-4} \\) m² gives \\( F_{\\text{cup}} = 38.9 \\) N, against a required \\( (3.5)(29.43)(2) = 206 \\) N, so \\( n \\ge 5.3 \\) — six cups. Leaving out the acceleration yields only two, a third of what is needed, and that is how a carton is dropped in mid-air.'
      }
    },
    {
      q: {
        th: 'เซลล์หนึ่งมี \\( v_h = 1.6 \\) m/s, \\( v_r = 1.0 \\) m/s, \\( T_r = 0.10 \\) s, \\( T_s = 0.30 \\) s, \\( C = 0.20 \\) m และ \\( Z = 0.10 \\) m ระยะแยกเพื่อการป้องกันเป็นเท่าใด',
        en: 'A cell has \\( v_h = 1.6 \\) m/s, \\( v_r = 1.0 \\) m/s, \\( T_r = 0.10 \\) s, \\( T_s = 0.30 \\) s, \\( C = 0.20 \\) m and \\( Z = 0.10 \\) m. What is the protective separation distance?'
      },
      options: [
        { th: '1.34 m จากการคิดระยะหยุดของหุ่นยนต์เต็มค่า แทนที่จะคิดเพียงครึ่งหนึ่งของค่านั้น', en: '1.34 m, taking the robot&rsquo;s stopping distance in full instead of halving it' },
        { th: '0.71 m จากการคิดพจน์ของคนด้วยเวลาตอบสนองเท่านั้น โดยไม่รวมเวลาที่ใช้หยุด', en: '0.71 m, taking the human term over the reaction time alone without the stopping time' },
        { th: '0.55 m จากการคิดเฉพาะพจน์ของหุ่นยนต์และค่าเผื่อ โดยละพจน์ของคนออกไปทั้งพจน์', en: '0.55 m, taking only the robot terms and the allowances and dropping the human term' },
        { th: '1.19 m จากการแทนค่าในสมการ (8.22) โดยคิดระยะหยุดของหุ่นยนต์เป็นครึ่งหนึ่ง', en: '1.19 m, substituting into equation (8.22) with the robot&rsquo;s stopping distance halved' }
      ],
      answer: 3,
      explain: {
        th: 'สมการ (8.22) ให้ \\( (1.6)(0.40) + (1.0)(0.10) + \\tfrac{1}{2}(1.0)(0.30) + 0.30 = 0.64 + 0.10 + 0.15 + 0.30 = 1.19 \\) m สังเกตว่าพจน์ของคนมีค่า 0.64 m คือเกินครึ่งของทั้งหมด การละพจน์นี้ทิ้งจึงให้คำตอบที่เล็กกว่าความจริงเกือบครึ่ง ซึ่งอันตรายอย่างยิ่งในการออกแบบจริง',
        en: 'Equation (8.22) gives \\( (1.6)(0.40) + (1.0)(0.10) + \\tfrac{1}{2}(1.0)(0.30) + 0.30 = 0.64 + 0.10 + 0.15 + 0.30 = 1.19 \\) m. Note that the human term alone is 0.64 m, over half the total, so dropping it gives an answer almost half the true one — dangerously wrong in a real design.'
      }
    },
    {
      q: {
        th: 'ต้องพาปลายเครื่องมือลอดใต้คานของโรงเรือนจากจุดหนึ่งไปอีกจุด ทั้งสองจุดอยู่ใต้คานพอดี ควรสั่งอย่างไรและเพราะเหตุใด',
        en: 'The tool must pass under a greenhouse beam from one point to another, both of which sit below it. What command, and why?'
      },
      options: [
        { th: 'สั่งแบบเชิงเส้น เพราะเส้นทางของ TCP เป็นเส้นตรงระหว่างสองจุด จึงไม่โป่งขึ้นไปชนคาน', en: 'A linear move, the TCP path being straight between the points and so not bulging into the beam' },
        { th: 'สั่งแบบแปรค่าข้อต่อ เพราะใช้การคำนวณน้อยกว่าจึงเคลื่อนที่ได้เร็วกว่าในระยะทางเท่ากัน', en: 'A joint-interpolated move, needing less computation and so running faster over the same distance' },
        { th: 'สั่งแบบใดก็ได้ เพราะทั้งสองจุดอยู่ใต้คานอยู่แล้ว เส้นทางระหว่างจุดจึงอยู่ใต้คานด้วย', en: 'Either will do: both points are already below the beam, so the path between them is too' },
        { th: 'สั่งแบบแปรค่าข้อต่อ เพราะข้อต่อเคลื่อนที่ด้วยอัตราสม่ำเสมอจึงเดินทางได้ราบเรียบที่สุด', en: 'A joint-interpolated move, the joints moving at uniform rates and so travelling most smoothly' }
      ],
      answer: 0,
      explain: {
        th: 'แอนิเมชัน 8.3 แสดงว่าเส้นทางของ TCP ในโหมดข้อต่อโป่งออกจากเส้นตรงได้ถึงราว 300 mm ทั้งที่จุดต้นทางและปลายทางปลอดภัยทั้งคู่ สมมติฐานที่ว่าจุดปลายทั้งสองปลอดภัยแล้วเส้นทางจะปลอดภัยจึงเป็นเท็จ และเป็นที่มาของการชนในงานติดตั้งจริงบ่อยที่สุด',
        en: 'Animation 8.3 shows the TCP straying some 300 mm from the straight line in joint mode although both end points are clear. The assumption that safe end points imply a safe path is false, and it is the commonest source of collisions on a real installation.'
      }
    },
    {
      q: {
        th: 'ต้องเก็บมะม่วงที่ขนาดต่างกันมาก ผิวโค้งมีไข และช้ำง่าย ควรเลือกอุปกรณ์ปลายแขนแบบใด',
        en: 'Mangoes of widely varying size, with curved waxy skin that bruises easily, call for which end effector?'
      },
      options: [
        { th: 'สามนิ้วจับกลาง เพราะจัดผลให้เข้าศูนย์เองได้ จึงไม่ต้องวัดตำแหน่งผลก่อนหยิบทุกครั้ง', en: 'Three-finger centring, which self-centres the fruit and needs no position measurement' },
        { th: 'ถ้วยดูดสุญญากาศ เพราะไม่ต้องบีบผลเลย จึงไม่มีความดันสัมผัสที่ทำให้เนื้อช้ำได้', en: 'Vacuum cups, which squeeze nothing and so create no contact pressure to bruise the flesh' },
        { th: 'นิ้วจับขนานสองนิ้ว เพราะควบคุมแรงบีบได้แม่นที่สุด จึงจำกัดความดันสัมผัสได้ตามต้องการ', en: 'Parallel two-finger, whose grip force is the most precisely controllable and so limits the pressure' },
        { th: 'มือจับแบบนุ่ม เพราะปรับรูปตามผลที่ขนาดไม่แน่นอนได้ และกระจายแรงบนพื้นที่กว้างกว่า', en: 'A soft gripper, conforming to fruit of uncertain size and spreading the force over a wider area' }
      ],
      answer: 3,
      explain: {
        th: 'ผิวโค้งและมีไขทำให้ถ้วยดูดปิดสุญญากาศไม่สนิท จึงใช้ถ้วยดองไม่ได้ ส่วนนิ้วแข็งทั้งแบบสองนิ้วและสามนิ้วต้องรู้ขนาดล่วงหน้าและกดลงบนพื้นที่สัมผัสเล็ก ทำให้ความดันสัมผัสสูงเกินเกณฑ์ช้ำตามสมการ (8.19) มือจับแบบนุ่มแลกความสามารถในการควบคุมแรงกับการปรับรูปและการกระจายแรง ซึ่งเป็นการแลกที่ถูกต้องสำหรับผลไม้ชนิดนี้',
        en: 'Curved waxy skin will not hold a vacuum, which rules the cups out, and rigid fingers of either kind need the size known in advance and press on a small contact patch, pushing the pressure of equation (8.19) past the bruising threshold. A soft gripper trades controllable force for conformity and a wider contact area, and for this fruit that is the right trade.'
      }
    }
  ]
});
