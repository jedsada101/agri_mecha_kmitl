/* ==========================================================================
   Chapter 10 — pre-test and post-test items
   Written to the course item-writing rules: options parallel in form and
   length, distractors drawn from real misconceptions, and questions that ask
   the learner to compute, to diagnose a drift or to specify a system.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch10-pre', {
  type: 'pre',
  chapter: 'ch10',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 10', en: 'Pre-test — Chapter 10' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการวินิจฉัยสาเหตุของความคลาดเคลื่อนและการเลือกระบบ ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around tracing an error to its cause and choosing a system. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'ความต่างที่สำคัญที่สุดระหว่างแขนกลที่ยึดกับพื้นกับหุ่นยนต์เคลื่อนที่คือข้อใด',
        en: 'What is the most important difference between a floor-mounted arm and a mobile robot?'
      },
      options: [
        { th: 'หุ่นยนต์เคลื่อนที่ทำงานกลางแจ้ง จึงต้องมีมาตรฐานการป้องกันน้ำและฝุ่นที่สูงกว่ามาก', en: 'A mobile robot works outdoors and so needs a far higher ingress protection rating' },
        { th: 'หุ่นยนต์เคลื่อนที่ต้องประมาณตำแหน่งของตัวเอง ส่วนแขนกลอ่านได้จากตัวเข้ารหัสโดยตรง', en: 'A mobile robot must estimate its own position; an arm reads it straight from its encoders' },
        { th: 'หุ่นยนต์เคลื่อนที่มีองศาอิสระมากกว่า จึงต้องใช้สมการจลนศาสตร์ที่ซับซ้อนกว่ามาก', en: 'A mobile robot has more degrees of freedom, so its kinematics is far more involved' },
        { th: 'หุ่นยนต์เคลื่อนที่ใช้มอเตอร์กระแสตรง ส่วนแขนกลในอุตสาหกรรมใช้เซอร์โวมอเตอร์เป็นหลัก', en: 'A mobile robot uses DC motors, while an industrial arm relies mainly on servomotors' }
      ],
      answer: 1,
      explain: {
        th: 'ตัวเลือกที่เหลือเป็นเรื่องจริงในหลายกรณีแต่เป็นรายละเอียดทางวิศวกรรม ไม่ใช่ความต่างเชิงหลักการ แขนกลสองลิงก์กับรถสองล้อมีองศาอิสระใกล้เคียงกัน และทั้งคู่ใช้มอเตอร์ชนิดใดก็ได้ สิ่งที่เปลี่ยนไปจริงคือแขนกลมีฐานที่ไม่เคยขยับให้อ้างอิง ส่วนรถไม่มีจุดอ้างอิงใดเลย',
        en: 'The other options are often true but are engineering details rather than a difference of principle. A two-link arm and a two-wheeled vehicle have comparable degrees of freedom, and either may use any kind of motor. What genuinely changes is that the arm has a base that never moves to refer to, while the vehicle has no reference at all.'
      }
    },
    {
      q: {
        th: 'ล้อมาตรฐานหนึ่งล้อที่กลิ้งโดยไม่ลื่นไถล ห้ามการเคลื่อนที่ในทิศใด',
        en: 'A single standard wheel rolling without slipping forbids motion in which direction?'
      },
      options: [
        { th: 'ห้ามเปลี่ยนความเร็วเร็วเกินไป เพราะแรงเสียดทานที่พื้นมีขีดจำกัดที่แน่นอน', en: 'It forbids changing speed too quickly, friction at the ground having a definite limit' },
        { th: 'ห้ามหมุนรอบแกนตั้งของตัวมันเอง จึงต้องมีมอเตอร์เลี้ยวแยกต่างหากเสมอ', en: 'It forbids rotation about its own vertical axis, so a separate steering motor is always needed' },
        { th: 'ห้ามเคลื่อนที่ถอยหลัง เพราะตัวเข้ารหัสที่ล้อนับได้เฉพาะทิศเดินหน้าเท่านั้น', en: 'It forbids reversing, the wheel encoder counting only in the forward direction' },
        { th: 'ห้ามเคลื่อนที่ไปด้านข้างในแนวตั้งฉากกับระนาบที่ล้อหมุนอยู่', en: 'It forbids sideways motion, perpendicular to the plane in which it turns' }
      ],
      answer: 3,
      explain: {
        th: 'ข้อห้ามนี้เป็นเงื่อนไขทางจลนศาสตร์ล้วน ไม่เกี่ยวกับมอเตอร์ ตัวเข้ารหัส หรือแรงเสียดทาน ล้อถอยหลังได้ตามปกติและหมุนรอบแกนตั้งได้ถ้ามีกลไกให้ ส่วนขีดจำกัดของแรงเสียดทานเป็นเรื่องของพลศาสตร์คนละหัวข้อ สิ่งที่ล้อห้ามจริง ๆ คือการเลื่อนตามขวาง ซึ่งนำไปสู่สมการ (10.11)',
        en: 'The prohibition is purely kinematic and has nothing to do with motors, encoders or friction. A wheel reverses perfectly well and may turn about a vertical axis if a mechanism provides one, while the friction limit is a question of dynamics elsewhere. What the wheel genuinely forbids is sliding crosswise, which leads to equation (10.11).'
      }
    },
    {
      q: {
        th: 'รถขับเคลื่อนเชิงผลต่างเลี้ยวด้วยวิธีใด',
        en: 'How does a differential-drive vehicle turn?'
      },
      options: [
        { th: 'ให้ล้อสองข้างหมุนด้วยความเร็วต่างกัน โดยไม่มีกลไกเลี้ยวอยู่ในรถเลย', en: 'The two wheels run at different speeds, with no steering mechanism in the vehicle at all' },
        { th: 'เบรกล้อข้างในให้ช้าลงด้วยดิสก์เบรก แล้วปล่อยให้ล้อข้างนอกลากตัวรถเลี้ยวไป', en: 'A disc brake slows the inner wheel and the outer wheel drags the vehicle round' },
        { th: 'เอียงแกนล้อทั้งสองพร้อมกันเป็นมุมเดียวกัน แล้วให้ล้อหมุนด้วยความเร็วเท่าเดิม', en: 'Both wheel axes are tilted through the same angle while the wheels keep their speed' },
        { th: 'หมุนล้อหน้าด้วยมอเตอร์เลี้ยวตัวที่สาม ขณะที่ล้อหลังทั้งสองยังหมุนด้วยความเร็วเท่ากัน', en: 'A third motor steers the front wheels while both rear wheels keep the same speed' }
      ],
      answer: 0,
      explain: {
        th: 'ความเรียบง่ายเชิงกลไกคือจุดเด่นทั้งหมดของโครงร่างนี้ มีเพียงมอเตอร์สองตัวและไม่มีชิ้นส่วนเลี้ยวที่สึกหรอหรือต้องปรับตั้ง การเบรกล้อข้างในทำให้เลี้ยวได้จริงแต่เป็นการเสียพลังงานไปเป็นความร้อน และไม่ใช่วิธีที่โครงร่างนี้ใช้',
        en: 'Mechanical simplicity is the entire point of this layout: two motors and no steering parts to wear or adjust. Braking the inner wheel would indeed turn the vehicle, but it throws the energy away as heat and is not how this layout works.'
      }
    },
    {
      q: {
        th: 'วัดระยะทางที่รถวิ่งจริงเทียบกับที่คำนวณจากการนับรอบล้อสิบครั้ง พบว่าการนับรอบล้อให้ค่ามากกว่าความจริงทุกครั้ง ข้อสรุปใดถูกต้อง',
        en: 'Ten runs comparing real distance with the distance from wheel counts show the wheel counts reading long every time. Which conclusion is right?'
      },
      options: [
        { th: 'เป็นสัญญาณรบกวนสุ่มตามปกติ ซึ่งจะหักล้างกันเองถ้าวัดหลายครั้งมากพอ', en: 'This is ordinary random noise, which cancels if enough runs are averaged' },
        { th: 'ตัวเข้ารหัสเสีย เพราะอุปกรณ์ที่ทำงานปกติจะให้ค่าคลาดเคลื่อนทั้งสองทิศเท่า ๆ กัน', en: 'The encoder is faulty: a healthy one errs equally in both directions' },
        { th: 'เป็นความลื่นไถล ซึ่งมีค่าเป็นบวกเสมอ ความคลาดเคลื่อนจึงสะสมไปทางเดียว', en: 'This is slip, which is always positive, so the error accumulates in one direction' },
        { th: 'ตั้งค่ารัศมีล้อในโปรแกรมผิด ซึ่งแก้ได้ด้วยการวัดรัศมีล้อใหม่ด้วยเวอร์เนีย', en: 'The wheel radius in the program is wrong, and re-measuring it with callipers fixes it' }
      ],
      answer: 2,
      explain: {
        th: 'คำว่า “ทุกครั้ง” ตัดความเป็นสัญญาณรบกวนสุ่มออกไปทันที การวัดรัศมีล้อใหม่ช่วยได้บางส่วนแต่ไม่ทั้งหมด เพราะรัศมีประสิทธิผลขณะรับน้ำหนักและขณะจมลงในพื้นนั้นเล็กกว่ารัศมีที่วัดด้วยเวอร์เนียเสมอ และเปลี่ยนไปตามพื้นผิวที่วิ่ง',
        en: 'The words “every time” rule out random noise at once. Re-measuring the radius helps but not entirely, because the effective radius under load and sinking into the surface is always smaller than the one callipers give, and it changes with the ground being driven on.'
      }
    },
    {
      q: {
        th: 'ระหว่างความคลาดเคลื่อนของระยะทาง 1% กับความคลาดเคลื่อนของทิศทาง 1 องศา ข้อใดส่งผลเสียมากกว่าในระยะยาว และเพราะเหตุใด',
        en: 'Between a 1% distance error and a 1 degree heading error, which does more harm over a long run, and why?'
      },
      options: [
        { th: 'เท่ากัน เพราะทั้งคู่เป็นความคลาดเคลื่อนเชิงระบบที่สะสมในอัตราเดียวกันเสมอ', en: 'Equally, both being systematic errors that accumulate at the same rate' },
        { th: 'ความคลาดเคลื่อนของระยะทาง เพราะแก้ด้วยการสอบเทียบไม่ได้ ต่างจากมุมที่แก้ได้', en: 'The distance error, since calibration cannot correct it as it can an angle' },
        { th: 'ความคลาดเคลื่อนของระยะทาง เพราะมันคูณกับระยะทางทั้งหมดที่วิ่งไปโดยตรง', en: 'The distance error, because it multiplies the whole distance travelled directly' },
        { th: 'ความคลาดเคลื่อนของทิศทาง เพราะมันคูณกับทุกเมตรที่วิ่งต่อไปหลังจากนั้น', en: 'The heading error, because it multiplies every metre driven after it appears' }
      ],
      answer: 3,
      explain: {
        th: 'ความคลาดเคลื่อนของระยะทาง 1% ในระยะ 100 m ทำให้ผิดไป 1 m ส่วนทิศทางที่ผิด 1 องศาทำให้ผิดไปด้านข้าง 1.7 m ในระยะเดียวกัน และจะโตขึ้นเรื่อย ๆ ตามระยะที่วิ่งต่อ ส่วนข้อที่บอกว่าแก้ด้วยการสอบเทียบไม่ได้นั้นกลับกัน เพราะความคลาดเคลื่อนของระยะทางคือสิ่งที่สอบเทียบแก้ได้ง่ายที่สุด',
        en: 'A 1% distance error over 100 m is 1 m out; a 1 degree heading error is 1.7 m out sideways over the same distance, and keeps growing with every further metre. The claim that calibration cannot correct it is backwards: a distance error is the easiest thing calibration does fix.'
      }
    },
    {
      q: {
        th: 'เปรียบเทียบการนับรอบล้อกับ GNSS ข้อใดถูกต้อง',
        en: 'Comparing wheel odometry with GNSS, which statement is correct?'
      },
      options: [
        { th: 'ทั้งคู่ไม่สะสมความคลาดเคลื่อน ต่างกันเพียงความแม่นยำและราคาของอุปกรณ์', en: 'Neither accumulates error; they differ only in accuracy and in price' },
        { th: 'การนับรอบล้อให้ค่าถี่แต่สะสมความคลาดเคลื่อน ส่วน GNSS ให้ค่าช้ากว่าแต่ไม่สะสม', en: 'Odometry is fast but accumulates error; GNSS is slower but does not accumulate' },
        { th: 'การนับรอบล้อให้ค่าช้าแต่ไม่สะสม ส่วน GNSS ให้ค่าถี่กว่าแต่สะสมความคลาดเคลื่อน', en: 'Odometry is slow but drift-free; GNSS is faster but accumulates error' },
        { th: 'ทั้งคู่สะสมความคลาดเคลื่อน จึงต้องใช้ IMU มาแก้ค่าให้ทั้งสองตัวเสมอ', en: 'Both accumulate error, so an IMU must always be added to correct them both' }
      ],
      answer: 1,
      explain: {
        th: 'ความต่างนี้คือเหตุผลทั้งหมดที่ต้องผสานข้อมูล ตัวที่ให้ค่าถี่แต่ไหลไปตามเวลาต้องการตัวที่ช้าแต่ยึดกับโลกภายนอกมาคอยดึงกลับ ส่วน IMU อยู่ในกลุ่มเดียวกับการนับรอบล้อ คือถี่และไหล จึงแก้ปัญหาการไหลให้กันเองไม่ได้',
        en: 'This difference is the whole reason for fusion: the fast source that drifts needs the slow one anchored to the outside world to pull it back. An IMU belongs to the same family as odometry — fast and drifting — so the two cannot cure each other&rsquo;s drift.'
      }
    },
    {
      q: {
        th: 'งานพ่นสารในแปลงต้องการเส้นทางแบบใด',
        en: 'What kind of route does spraying a field require?'
      },
      options: [
        { th: 'เส้นทางที่ใช้เวลาน้อยที่สุด ซึ่งคือเส้นทางที่เลี้ยวน้อยครั้งที่สุดเสมอในทุกกรณี', en: 'The quickest route, which is always the one with the fewest turns' },
        { th: 'เส้นทางที่สั้นที่สุดจากจุดเริ่มต้นไปจุดสิ้นสุด ซึ่งหาได้ด้วยอัลกอริทึม A* บนตารางกริด', en: 'The shortest route from start to finish, found by A* on a grid' },
        { th: 'เส้นทางที่ผ่านทุกตารางเมตรของแปลงอย่างน้อยหนึ่งครั้ง ซึ่งเป็นปัญหาคนละประเภทกัน', en: 'A route passing over every square metre at least once, which is a different problem' },
        { th: 'เส้นทางที่หลีกเลี่ยงสิ่งกีดขวางได้ดีที่สุด โดยคำนวณใหม่ทุกคาบจากข้อมูลเซนเซอร์สด', en: 'The route that best avoids obstacles, recomputed each cycle from live sensor data' }
      ],
      answer: 2,
      explain: {
        th: 'การหาเส้นทางที่สั้นที่สุดและการหลบสิ่งกีดขวางเป็นงานที่มีอยู่จริงในระบบ แต่เป็นคนละชั้นกัน การครอบคลุมพื้นที่เป็นเป้าหมายหลักของงานพ่นสาร และวัดความสำเร็จด้วยสัดส่วนพื้นที่ที่ทำได้ ไม่ใช่ด้วยระยะทางที่ประหยัดไป',
        en: 'Shortest-path search and obstacle avoidance both exist in such a system, but at different layers. Coverage is the goal of a spraying run, and success is measured by the fraction of ground treated rather than by distance saved.'
      }
    },
    {
      q: {
        th: 'หุ่นยนต์เก็บเกี่ยวที่วิ่งบนรางในโรงเรือนไม่ต้องใช้ GNSS หรือ SLAM เลย เพราะเหตุใด',
        en: 'A harvesting robot running on a rail in a greenhouse needs neither GNSS nor SLAM. Why?'
      },
      options: [
        { th: 'เพราะรางบังคับการเคลื่อนที่ไว้ทางเดียว การนับรอบล้อบนรางจึงระบุตำแหน่งได้แม่นพอ', en: 'Because the rail constrains the motion to one direction, so wheel counts on it suffice' },
        { th: 'เพราะรถวิ่งช้ามาก ความคลาดเคลื่อนสะสมจึงน้อยจนไม่ต้องแก้ไขด้วยเซนเซอร์อื่น', en: 'Because it moves so slowly that the accumulated error never needs correcting' },
        { th: 'เพราะโรงเรือนมีขนาดเล็ก ระยะทางที่วิ่งจึงสั้นเกินกว่าที่ความคลาดเคลื่อนจะโตได้', en: 'Because a greenhouse is small, so the distances are too short for error to grow' },
        { th: 'เพราะโรงเรือนเป็นพื้นที่ปิด สัญญาณดาวเทียมเข้าไม่ถึง จึงต้องใช้วิธีอื่นแทนอยู่แล้ว', en: 'Because a greenhouse is enclosed and satellite signals cannot reach it anyway' }
      ],
      answer: 0,
      explain: {
        th: 'การที่สัญญาณดาวเทียมเข้าไม่ถึงเป็นเรื่องจริง แต่เป็นข้อจำกัด ไม่ใช่คำอธิบายว่าทำไมจึง <em>ไม่จำเป็นต้องใช้</em> ส่วนความเร็วและขนาดไม่ได้ช่วย เพราะความคลาดเคลื่อนสะสมตามระยะทางที่วิ่งไม่ใช่ตามเวลา และรถในโรงเรือนวิ่งหลายกิโลเมตรต่อวัน เหตุผลที่แท้จริงคือรางตัดองศาอิสระออกไปจนเหลือหนึ่งเดียว ซึ่งเป็นการแก้ปัญหาด้วยกลไกตามที่หัวข้อ 10.1 เสนอไว้',
        en: 'Blocked satellite signals are a real constraint but do not explain why none is <em>needed</em>. Speed and size do not help either: error accumulates with distance rather than with time, and such a robot covers kilometres a day. The real reason is that the rail removes every degree of freedom but one — solving the problem mechanically, as §10.1 argued.'
      }
    }
  ]
});

AMRQuiz.mount('ch10-post', {
  type: 'post',
  chapter: 'ch10',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 10', en: 'Post-test — Chapter 10' },
  intro: {
    th: 'สิบข้อ เน้นการคำนวณจลนศาสตร์ การประมาณความคลาดเคลื่อน การวางแผนครอบคลุมแปลง และการเลือกระบบนำทาง เกณฑ์ผ่าน 70%',
    en: 'Ten items on computing kinematics, estimating error, planning coverage and choosing a navigation system. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'รถมีระยะห่างล้อ \\( b = 0.80 \\) m ต้องวิ่งโค้งรัศมี 4.0 m ด้วยความเร็ว 1.20 m/s ความเร็วล้อสองข้างเป็นเท่าใด',
        en: 'A vehicle with wheel separation \\( b = 0.80 \\) m must follow a 4.0 m arc at 1.20 m/s. What are the two wheel speeds?'
      },
      options: [
        { th: '1.80 และ 0.60 m/s จากการใช้ระยะห่างล้อสองเท่า ซึ่งเป็นเส้นผ่านศูนย์กลางของวงล้อ', en: '1.80 and 0.60 m/s, using twice the wheel separation, the diameter of the wheel circle' },
        { th: '1.44 และ 0.96 m/s จากการใช้ระยะห่างล้อเต็มค่าแทนที่จะใช้เพียงครึ่งหนึ่งในสมการ', en: '1.44 and 0.96 m/s, using the full wheel separation instead of half of it' },
        { th: '1.32 และ 1.08 m/s จากการแทนค่าในสมการ (10.4) โดยใช้ครึ่งหนึ่งของระยะห่างล้อ', en: '1.32 and 1.08 m/s, substituting into equation (10.4) with half the wheel separation' },
        { th: '1.20 และ 1.20 m/s เพราะความเร็วที่สั่งคือความเร็วของจุดกึ่งกลางเพลาทั้งสองล้อ', en: '1.20 and 1.20 m/s, the commanded speed being that of the midpoint of the axle' }
      ],
      answer: 2,
      explain: {
        th: '\\( \\omega = v/R = 1.20/4.0 = 0.30 \\) rad/s แล้วสมการ (10.4) ให้ \\( v_R = 1.20 + (0.30)(0.40) = 1.32 \\) และ \\( v_L = 1.20 - 0.12 = 1.08 \\) m/s ล้อทั้งสองต้องเร็วไม่เท่ากัน มิฉะนั้นรถจะวิ่งตรงตามสมการ (10.3) ซึ่งให้ \\( R \\) เป็นอนันต์',
        en: '\\( \\omega = v/R = 1.20/4.0 = 0.30 \\) rad/s, and equation (10.4) gives \\( v_R = 1.20 + (0.30)(0.40) = 1.32 \\) and \\( v_L = 1.20 - 0.12 = 1.08 \\) m/s. The wheels must differ, or equation (10.3) returns an infinite \\( R \\) and the vehicle runs straight.'
      }
    },
    {
      q: {
        th: 'ตั้งความเร็วล้อซ้ายเป็น \\( -0.40 \\) m/s และล้อขวาเป็น \\( +0.40 \\) m/s รถจะทำอะไร และ ICC อยู่ที่ใด',
        en: 'With the left wheel at \\( -0.40 \\) m/s and the right at \\( +0.40 \\) m/s, what does the vehicle do, and where is the ICC?'
      },
      options: [
        { th: 'หมุนอยู่กับที่โดยไม่เคลื่อนที่ไปไหน โดยที่ ICC อยู่กึ่งกลางระหว่างล้อทั้งสอง', en: 'It spins on the spot without going anywhere, the ICC midway between the wheels' },
        { th: 'วิ่งถอยหลังเป็นเส้นตรง โดยที่ ICC อยู่ที่อนันต์ไปทางด้านหลังของตัวรถ', en: 'It reverses in a straight line, the ICC at infinity behind it' },
        { th: 'วิ่งโค้งรัศมีเล็กมากไปทางซ้าย โดยที่ ICC อยู่นอกตัวรถเพียงเล็กน้อย', en: 'It follows a very tight arc to the left, the ICC just outside the vehicle' },
        { th: 'หยุดนิ่งอยู่กับที่ เพราะความเร็วล้อสองข้างหักล้างกันจนผลรวมเป็นศูนย์พอดี', en: 'It stands still, the two wheel speeds cancelling to exactly zero' }
      ],
      answer: 0,
      explain: {
        th: 'สมการ (10.2) ให้ \\( v = 0 \\) และ \\( \\omega = 0.80/b \\ne 0 \\) จุดกึ่งกลางเพลาจึงไม่เคลื่อนที่แต่ตัวรถหมุน ซึ่งไม่เหมือนกับการหยุดนิ่งเลย และสมการ (10.3) ให้ \\( R = 0 \\) พอดี คือ ICC อยู่กลางเพลา ความสามารถนี้เองคือข้อได้เปรียบของการขับเคลื่อนเชิงผลต่างในแถวปลูกที่แคบ',
        en: 'Equation (10.2) gives \\( v = 0 \\) with \\( \\omega = 0.80/b \\ne 0 \\): the midpoint of the axle does not move while the vehicle rotates, which is not the same as standing still. Equation (10.3) gives \\( R = 0 \\) exactly, placing the ICC on the axle centre. This ability is precisely the advantage of differential drive in a narrow row.'
      }
    },
    {
      q: {
        th: 'รถมี \\( b = 0.50 \\) m รัศมีล้อขวามากกว่าซ้าย 1% สั่งให้วิ่งตรง 30 m ทิศทางจะคลาดเคลื่อนไปเท่าใด',
        en: 'A vehicle with \\( b = 0.50 \\) m has a right wheel 1% larger than the left. Commanded 30 m straight, how far does its heading err?'
      },
      options: [
        { th: 'ประมาณ 3.4 องศา เพราะความคลาดเคลื่อน 1% ของระยะ 30 m คิดเป็น 0.3 m เท่านั้น', en: 'About 3.4 degrees, a 1% error over 30 m amounting to only 0.3 m' },
        { th: 'ประมาณ 17 องศา เพราะความคลาดเคลื่อนเฉลี่ยกันระหว่างล้อทั้งสองข้างจึงเหลือครึ่งเดียว', en: 'About 17 degrees, the error averaging between the two wheels and so halving' },
        { th: 'ประมาณ 0.6 องศา จากการแทนค่าในสมการ (10.13) แล้วอ่านผลลัพธ์เป็นองศาโดยตรง', en: 'About 0.6 degrees, substituting into equation (10.13) and reading the result as degrees' },
        { th: 'ประมาณ 34 องศา จากการแทนค่าในสมการ (10.13) แล้วแปลงจากเรเดียนเป็นองศา', en: 'About 34 degrees, substituting into equation (10.13) and converting radians to degrees' }
      ],
      answer: 3,
      explain: {
        th: 'สมการ (10.13) ให้ \\( \\Delta\\theta = (30)(0.01)/0.50 = 0.60 \\) เรเดียน ซึ่งเท่ากับ 34.4 องศา กับดักที่ร้ายที่สุดคือการอ่าน 0.60 เป็นองศาแล้วสรุปว่าความคลาดเคลื่อนเล็กน้อยจนไม่ต้องสนใจ ทั้งที่ความจริงมันทำให้รถหันไปเกือบสี่สิบองศาภายในระยะสามสิบเมตร',
        en: 'Equation (10.13) gives \\( \\Delta\\theta = (30)(0.01)/0.50 = 0.60 \\) radians, which is 34.4 degrees. The worst trap is reading 0.60 as degrees and concluding the error is too small to matter, when in fact the vehicle has swung nearly forty degrees within thirty metres.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 10.2 เมื่อกดเปิดการรับ GNSS โดยไม่แตะสไลเดอร์อื่นเลย สิ่งที่เกิดขึ้นคือข้อใด',
        en: 'In Animation 10.2, switching the GNSS fix on without touching any slider does what?'
      },
      options: [
        { th: 'ความคลาดเคลื่อนยังโตขึ้นเรื่อย ๆ แต่ช้าลงประมาณครึ่งหนึ่งของอัตราเดิมที่เคยเป็น', en: 'The error still grows without limit, at roughly half the rate it did before' },
        { th: 'เส้นทางจริงกลับมาใกล้สี่เหลี่ยมที่สั่งไว้ และความคลาดเคลื่อนคงอยู่ในระดับหนึ่งโดยไม่โตขึ้น', en: 'The true path returns near the commanded square and the error settles instead of growing' },
        { th: 'เส้นทางที่รถเชื่อว่าตัวเองไปเปลี่ยนรูปร่าง แต่เส้นทางจริงยังบานออกเป็นก้นหอยเหมือนเดิม', en: 'The believed path changes shape while the true path still opens into the same spiral' },
        { th: 'ความคลาดเคลื่อนลดลงเหลือศูนย์พอดี เพราะระบบรู้ตำแหน่งจริงของตัวเองได้ครบถ้วนแล้ว', en: 'The error falls to exactly zero, the system now knowing its true position completely' }
      ],
      answer: 1,
      explain: {
        th: 'การรับค่าจากภายนอกเปลี่ยนความคลาดเคลื่อนจากแบบสะสมไม่สิ้นสุดให้กลายเป็นแบบมีขอบเขต ซึ่งเป็นการเปลี่ยนเชิงคุณภาพ ไม่ใช่เพียงการชะลอ และขอบเขตนั้นคือความแม่นยำของตัวรับสัญญาณเอง จึงไม่มีทางเป็นศูนย์ ส่วนรถหันกลับเข้าหาสี่เหลี่ยมได้เพราะมันใช้ความเชื่อที่ถูกแก้แล้วเป็นเข็มทิศ',
        en: 'An external fix converts an error that accumulates without limit into one that is bounded — a change of kind, not merely of rate — and that bound is the receiver&rsquo;s own accuracy, so it is never zero. The vehicle steers back onto the square because it is navigating by a belief that has been corrected.'
      }
    },
    {
      q: {
        th: 'แปลงกว้าง 90 m อุปกรณ์กว้าง 4.0 m ต้องซ้อนทับ 15% ต้องวิ่งกี่แนว',
        en: 'A field is 90 m across, the implement is 4.0 m wide and 15% overlap is required. How many passes?'
      },
      options: [
        { th: '27 แนว จากการหาความกว้างทำงานจริงก่อนตามสมการ (10.18) แล้วปัดเศษขึ้น', en: '27 passes, finding the effective width by equation (10.18) first and rounding up' },
        { th: '23 แนว จากการหารความกว้างแปลงด้วยความกว้างอุปกรณ์ โดยไม่หักการซ้อนทับออกก่อน', en: '23 passes, dividing the field by the implement width without deducting the overlap' },
        { th: '26 แนว จากการคำนวณถูกแล้วแต่ปัดเศษลง ทั้งที่เศษที่เหลือยังต้องวิ่งอีกหนึ่งแนว', en: '26 passes, computed correctly but rounded down, though the remainder still needs a pass' },
        { th: '24 แนว จากการคิดว่าการซ้อนทับคือ 0.15 m ซึ่งเป็นค่าสัมบูรณ์ไม่ใช่สัดส่วน', en: '24 passes, treating the overlap as an absolute 0.15 m rather than a fraction' }
      ],
      answer: 0,
      explain: {
        th: 'สมการ (10.18) ให้ \\( w_{\\text{eff}} = 4.0(1 - 0.15) = 3.40 \\) m แล้ว \\( N = \\lceil 90/3.40 \\rceil = \\lceil 26.5 \\rceil = 27 \\) การปัดเศษลงเหลือ 26 แนวจะทำให้เหลือแถบที่ไม่ได้ทำกว้าง 1.6 m พาดตลอดความยาวแปลง ซึ่งในงานพ่นสารหมายถึงวัชพืชหรือโรคที่ไม่ได้ถูกจัดการเลยทั้งแนว',
        en: 'Equation (10.18) gives \\( w_{\\text{eff}} = 4.0(1 - 0.15) = 3.40 \\) m, so \\( N = \\lceil 90/3.40 \\rceil = \\lceil 26.5 \\rceil = 27 \\). Rounding down to 26 leaves an untreated strip 1.6 m wide running the whole length of the field, which in a spraying run means weeds or disease left entirely unchecked.'
      }
    },
    {
      q: {
        th: 'แทรกเตอร์มีฐานล้อ 2.8 m เลี้ยวได้สูงสุด \\( 30\\deg \\) ต้องเว้นหัวแปลงกว้างเท่าใด',
        en: 'A tractor has a 2.8 m wheelbase and steers to \\( 30\\deg \\). How wide must the headland be?'
      },
      options: [
        { th: 'ประมาณ 1.6 m จากการคูณฐานล้อด้วยแทนเจนต์ของมุมเลี้ยวสูงสุดที่รถทำได้', en: 'About 1.6 m, multiplying the wheelbase by the tangent of the maximum steering angle' },
        { th: 'ประมาณ 19.4 m เพราะต้องเผื่อทั้งการกลับตัวและระยะเร่งให้ถึงความเร็วทำงานด้วย', en: 'About 19.4 m, allowing for the turn and for accelerating back to working speed' },
        { th: 'ประมาณ 9.7 m จากการหารัศมีวงเลี้ยวต่ำสุดก่อน แล้วคูณสองตามสมการ (10.19)', en: 'About 9.7 m, finding the minimum turning radius first and doubling it by equation (10.19)' },
        { th: 'ประมาณ 4.9 m ซึ่งเท่ากับรัศมีวงเลี้ยวต่ำสุดพอดี เพราะรถกลับตัวในรัศมีเดียวได้', en: 'About 4.9 m, the minimum turning radius itself, the vehicle turning within one radius' }
      ],
      answer: 2,
      explain: {
        th: 'สมการ (10.12) ให้ \\( R_{\\min} = 2.8/\\tan 30\\deg = 4.85 \\) m แล้วสมการ (10.19) ให้ \\( H \\ge 2(4.85) = 9.7 \\) m ที่ต้องเป็นสองเท่าเพราะรถต้องเลี้ยวกลับ 180 องศาเพื่อเข้าแนวถัดไป ไม่ใช่เลี้ยว 90 องศา ส่วนการคูณด้วยแทนเจนต์แทนการหารให้ค่าที่เล็กกว่าความจริงถึงหกเท่า',
        en: 'Equation (10.12) gives \\( R_{\\min} = 2.8/\\tan 30\\deg = 4.85 \\) m, and equation (10.19) gives \\( H \\ge 2(4.85) = 9.7 \\) m. The factor of two is there because the vehicle must turn through 180 degrees to enter the next pass, not 90. Multiplying by the tangent instead of dividing understates the answer sixfold.'
      }
    },
    {
      q: {
        th: 'แปลงสี่เหลี่ยม 300 m &times; 100 m จะวิ่งแนวยาว 300 m หรือแนวสั้น 100 m ดีกว่า โดยเวลากลับรถครั้งละ 30 s เท่ากัน',
        en: 'For a 300 m by 100 m field, are passes along the 300 m side or the 100 m side better, each turn costing 30 s?'
      },
      options: [
        { th: 'เท่ากัน เพราะพื้นที่ที่ต้องทำเท่ากัน ระยะทางรวมของการทำงานจึงเท่ากันทั้งสองแบบ', en: 'Equally good: the area is the same, so the working distance is the same either way' },
        { th: 'แนวยาวดีกว่า เพราะต้องกลับรถน้อยครั้งกว่ามาก ซึ่งเป็นเวลาที่ไม่ได้ทำงานเลย', en: 'The long side, needing far fewer turns, and a turn does no work at all' },
        { th: 'แนวสั้นดีกว่า เพราะความคลาดเคลื่อนของทิศทางสะสมได้น้อยกว่าในแต่ละแนวที่วิ่ง', en: 'The short side, heading error having less distance to accumulate within each pass' },
        { th: 'แนวสั้นดีกว่า เพราะแต่ละแนวจบเร็วกว่า ทำให้แก้ไขเส้นทางที่ผิดพลาดได้เร็วกว่าด้วย', en: 'The short side, each pass finishing sooner so a wrong line is corrected sooner' }
      ],
      answer: 1,
      explain: {
        th: 'ระยะทางการทำงานของทั้งสองแบบเท่ากันจริง แต่จำนวนครั้งที่ต้องกลับรถต่างกันสามเท่า และเวลา 30 s ต่อครั้งไม่ได้ลดลงเลยเมื่อแนวสั้นลง ส่วนข้อดีเรื่องความคลาดเคลื่อนสะสมที่น้อยกว่านั้นเป็นเรื่องจริง แต่ชดเชยเวลาที่เสียไปไม่ได้เลยในแปลงที่มีระบบนำทางที่ใช้งานได้',
        en: 'The working distance really is the same, as one option says, but the number of turns differs threefold and the 30 s each one costs does not shrink when the pass does. The advantage of less accumulated error over a shorter pass is genuine, but nowhere near enough to repay the time lost on a field with a working navigation system.'
      }
    },
    {
      q: {
        th: 'ต้องการระบุตำแหน่งให้แม่นยำ ±5 cm ในแปลงอ้อยโล่งที่ไม่มีสิ่งใดให้จับเป็นจุดอ้างอิง ควรเลือกข้อใด',
        en: 'A position accurate to ±5 cm is needed in an open cane field with nothing distinctive to latch onto. Which choice?'
      },
      options: [
        { th: 'การนับรอบล้อร่วมกับ IMU คุณภาพสูง ซึ่งให้ค่าถี่พอที่จะชดเชยการไหลของกันและกัน', en: 'Odometry with a high-grade IMU, fast enough to compensate for each other&rsquo;s drift' },
        { th: 'ไลดาร์ที่ทำ SLAM ร่วมกับ IMU ซึ่งไม่ต้องพึ่งสัญญาณจากภายนอกแปลงเลยแม้แต่น้อย', en: 'Lidar doing SLAM with an IMU, depending on no signal from outside the field at all' },
        { th: 'GNSS ทั่วไปร่วมกับตัวกรองคาลมาน ซึ่งลดสัญญาณรบกวนลงจนได้ความแม่นยำที่ต้องการ', en: 'Standalone GNSS with a Kalman filter, whose noise reduction reaches the accuracy wanted' },
        { th: 'GNSS แบบ RTK ร่วมกับการนับรอบล้อ เพื่อให้ได้ทั้งความแม่นยำและค่าที่ต่อเนื่อง', en: 'RTK GNSS together with wheel odometry, for accuracy and continuity together' }
      ],
      answer: 3,
      explain: {
        th: 'ตารางที่ 10.3 ระบุว่ามีเพียง RTK ที่ให้ความแม่นยำระดับ 2–5 cm ได้ GNSS ทั่วไปอยู่ที่ระดับเมตร และตัวกรองลดได้เพียงสัญญาณรบกวน ไม่ได้ลดอคติเชิงระบบของสัญญาณเอง ส่วน SLAM ต้องการลักษณะเด่นในสภาพแวดล้อม ซึ่งแปลงอ้อยโล่งไม่มี และการนับรอบล้อกับ IMU ต่างก็ไหลทั้งคู่จึงยึดอะไรไว้ไม่ได้',
        en: 'Table 10.3 records that only RTK reaches 2–5 cm; standalone GNSS works in metres, and a filter removes noise rather than the signal&rsquo;s own systematic bias. SLAM needs distinctive features that an open cane field does not offer, and odometry and an IMU both drift, so neither can anchor the other.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 10.3 เมื่อเพิ่มการซ้อนทับจาก 0% เป็น 20% โดยคงความกว้างบูมไว้ ผลที่เกิดขึ้นคือข้อใด',
        en: 'In Animation 10.3, raising the overlap from 0% to 20% at a fixed boom width does what?'
      },
      options: [
        { th: 'จำนวนแนวและระยะทางรวมเพิ่มขึ้น พร้อมกับพื้นที่ที่ถูกทำซ้ำสองครั้งที่เพิ่มตามไปด้วย', en: 'The passes and distance grow, and so does the ground treated twice' },
        { th: 'จำนวนแนวลดลงเพราะแต่ละแนวครอบคลุมกว้างขึ้น ระยะทางรวมจึงสั้นลงตามไปด้วย', en: 'The passes fall, each covering more ground, so the distance shortens too' },
        { th: 'จำนวนแนวเพิ่มขึ้นแต่ระยะทางรวมคงเดิม เพราะแต่ละแนวสั้นลงในสัดส่วนที่หักล้างกันพอดี', en: 'The passes grow while the distance holds, each pass shortening in exact compensation' },
        { th: 'จำนวนแนวและระยะทางรวมคงเดิม แต่พื้นที่ที่ถูกทำซ้ำสองครั้งเพิ่มขึ้นตามการซ้อนทับ', en: 'The passes and distance hold while the doubly treated ground grows with the overlap' }
      ],
      answer: 0,
      explain: {
        th: 'การซ้อนทับทำให้ความกว้างทำงานจริงแคบลงตามสมการ (10.18) จึงต้องใช้แนวมากขึ้นเพื่อครอบคลุมความกว้างเท่าเดิม และแนวที่มากขึ้นหมายถึงทั้งระยะทางและเวลาที่มากขึ้น ความยาวของแต่ละแนวไม่เปลี่ยนเลยเพราะมันถูกกำหนดโดยความยาวแปลงกับหัวแปลงตามสมการ (10.19) ไม่ใช่โดยการซ้อนทับ',
        en: 'Overlap narrows the effective working width by equation (10.18), so more passes are needed to cover the same span, and more passes means more distance and more time. The length of each pass does not change at all, being set by the field and the headlands of equation (10.19) rather than by the overlap.'
      }
    },
    {
      q: {
        th: 'ตัวควบคุมที่เขียนขึ้นใน Webots ทำงานได้ดีมาก แต่พอย้ายไปรันบนรถจริงกลับใช้ไม่ได้เลย สาเหตุที่ควรตรวจเป็นอันดับแรกคือข้อใด',
        en: 'A controller that works beautifully in Webots fails completely on the real vehicle. What should be checked first?'
      },
      options: [
        { th: 'ขั้วของมอเตอร์ทั้งสองข้าง ซึ่งอาจต่อสลับกันจนรถเลี้ยวไปคนละทิศกับที่สั่งไว้', en: 'The polarity of both motors, which may be swapped so the vehicle turns the wrong way' },
        { th: 'ความเร็วของคอมพิวเตอร์บนรถ ซึ่งอาจประมวลผลไม่ทันคาบการควบคุมที่ตั้งไว้ในโปรแกรม', en: 'The speed of the on-board computer, which may not keep up with the control period' },
        { th: 'ค่าสัมประสิทธิ์เสียดทานที่ตั้งไว้ ซึ่งอาจต่างจากของจริงจนความลื่นไถลไม่ตรงกัน', en: 'The friction coefficients set, which may differ enough that the slip does not match' },
        { th: 'ตัวควบคุมอาจใช้ตำแหน่งจริงจากโหนด Supervisor ซึ่งเป็นข้อมูลที่รถจริงไม่มีทางรู้', en: 'Whether the controller used the Supervisor&rsquo;s true pose, which a real vehicle cannot know' }
      ],
      answer: 3,
      explain: {
        th: 'ตัวเลือกที่เหลือเป็นปัญหาที่เกิดขึ้นได้จริงทั้งหมด แต่แต่ละข้อทำให้พฤติกรรม <em>แย่ลง</em> ไม่ใช่ <em>ใช้ไม่ได้เลย</em> ขั้วมอเตอร์ที่สลับกันตรวจพบได้ในสิบวินาทีแรก ส่วนความเสียดทานและความเร็วประมวลผลทำให้ผลตอบสนองหยาบลง การใช้ข้อมูลที่มีอยู่เฉพาะในโลกจำลองเป็นข้อเดียวที่ทำให้ตัวควบคุมไม่มีทางทำงานได้เลยเมื่อย้ายออกมา',
        en: 'Every other option is a real problem, but each makes behaviour <em>worse</em> rather than <em>impossible</em>. Swapped motor leads show up in the first ten seconds, while friction and processor speed coarsen the response. Using information that exists only inside the simulator is the one fault that leaves the controller with no way to work at all once moved.'
      }
    }
  ]
});
