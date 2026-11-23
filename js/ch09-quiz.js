/* ==========================================================================
   Chapter 9 — pre-test and post-test items
   Written to the course item-writing rules: options parallel in form and
   length, distractors drawn from real misconceptions, and questions that ask
   the learner to compute, to diagnose a pose or to judge a structure.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch09-pre', {
  type: 'pre',
  chapter: 'ch09',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 9', en: 'Pre-test — Chapter 9' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการตีความเมทริกซ์และการวินิจฉัยท่าของหุ่นยนต์ ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around reading a matrix and diagnosing a pose. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'หลักแรกของเมทริกซ์การหมุน \\( {}^{A}\\mathbf{R}_{B} \\) มีความหมายว่าอย่างไร',
        en: 'What does the first column of a rotation matrix \\( {}^{A}\\mathbf{R}_{B} \\) mean?'
      },
      options: [
        { th: 'เป็นพิกัดของจุดใด ๆ ในเฟรม \\( \\{B\\} \\) เมื่อแปลงกลับเข้าสู่เฟรม \\( \\{A\\} \\)', en: 'It is the coordinates of any point of frame \\( \\{B\\} \\) carried back into frame \\( \\{A\\} \\)' },
        { th: 'เป็นแกน \\( x \\) ของเฟรม \\( \\{B\\} \\) เขียนด้วยพิกัดของเฟรม \\( \\{A\\} \\)', en: 'It is the \\( x \\) axis of frame \\( \\{B\\} \\) written in the coordinates of frame \\( \\{A\\} \\)' },
        { th: 'เป็นระยะที่จุดกำเนิดของเฟรม \\( \\{B\\} \\) เลื่อนไปตามแกน \\( x \\) ของเฟรม \\( \\{A\\} \\)', en: 'It is how far the origin of frame \\( \\{B\\} \\) has shifted along \\( \\{A\\} \\)&rsquo;s \\( x \\) axis' },
        { th: 'เป็นมุมที่เฟรม \\( \\{B\\} \\) หมุนไปรอบแกน \\( x \\) เมื่อเทียบกับเฟรม \\( \\{A\\} \\)', en: 'It is the angle by which frame \\( \\{B\\} \\) has turned about the \\( x \\) axis of \\( \\{A\\} \\)' }
      ],
      answer: 1,
      explain: {
        th: 'เมทริกซ์การหมุนไม่มีข้อมูลเรื่องการเลื่อนอยู่เลย การเลื่อนอยู่ในเวกเตอร์ \\( {}^{A}\\vect{d}_{B} \\) ต่างหาก ส่วนมุมก็ไม่ได้เก็บไว้ตรง ๆ แต่ซ่อนอยู่ในค่าของหลักทั้งหมดรวมกัน การมองว่าแต่ละหลักคือแกนหนึ่งแกนทำให้เขียนเมทริกซ์ได้โดยไม่ต้องท่องสูตร',
        en: 'A rotation matrix carries no translation at all — that lives in the vector \\( {}^{A}\\vect{d}_{B} \\). Nor does it store an angle directly; the angle is implicit in all the columns together. Seeing each column as one axis is what lets the matrix be written without a memorised formula.'
      }
    },
    {
      q: {
        th: 'หมุนกล่องรอบแกน \\( z \\) \\( 90\\deg \\) แล้วตามด้วยรอบแกน \\( y \\) \\( 90\\deg \\) เทียบกับการสลับลำดับ ผลเป็นอย่างไร',
        en: 'A box is turned \\( 90\\deg \\) about \\( z \\) then \\( 90\\deg \\) about \\( y \\). Compared with the reverse order, what results?'
      },
      options: [
        { th: 'ได้ท่าเดียวกัน ถ้ามุมทั้งสองเป็น \\( 90\\deg \\) พอดี แต่ต่างกันถ้าเป็นมุมอื่น', en: 'The same pose when both angles are exactly \\( 90\\deg \\), but different at other angles' },
        { th: 'ได้ท่าต่างกัน เฉพาะเมื่อแกนทั้งสองไม่ตั้งฉากกัน ซึ่งกรณีนี้ตั้งฉากจึงเหมือนกัน', en: 'A different pose only when the axes are not perpendicular, which here they are' },
        { th: 'ได้ท่าเดียวกัน เพราะมุมที่หมุนรวมเท่ากัน ลำดับจึงไม่มีผลต่อผลลัพธ์สุดท้าย', en: 'The same pose, the total rotation being equal, so the order does not matter' },
        { th: 'ได้ท่าต่างกัน เพราะการคูณเมทริกซ์การหมุนไม่มีสมบัติการสลับที่', en: 'A different pose, because the multiplication of rotation matrices does not commute' }
      ],
      answer: 3,
      explain: {
        th: 'ลองทำกับหนังสือหนึ่งเล่มจะเห็นทันทีว่าได้คนละด้าน การไม่สลับที่เป็นสมบัติทั่วไปของการหมุนในสามมิติ ไม่ได้ขึ้นกับว่ามุมเป็นเท่าใดหรือแกนตั้งฉากกันหรือไม่ นี่คือเหตุผลที่ผู้ผลิตหุ่นยนต์ทุกรายต้องระบุลำดับของมุมออยเลอร์ไว้ในเอกสาร',
        en: 'Try it with a book and the two results face different ways. Non-commutativity is a general property of rotation in three dimensions, independent of the sizes of the angles or whether the axes are perpendicular. It is why every robot maker documents the order of its Euler angles.'
      }
    },
    {
      q: {
        th: 'ทำไมจึงนิยมใช้เมทริกซ์ \\( 4 \\times 4 \\) แทนที่จะใช้การหมุนบวกการเลื่อนแยกกันตามสมการ (9.4)',
        en: 'Why is a \\( 4 \\times 4 \\) matrix preferred over a separate rotation and translation, as in equation (9.4)?'
      },
      options: [
        { th: 'เพราะการต่อเฟรมหลายชั้นกลายเป็นการคูณล้วน ไม่ต้องสลับระหว่างคูณกับบวก', en: 'Because chaining frames becomes pure multiplication, with no alternating adds' },
        { th: 'เพราะเมทริกซ์ \\( 4 \\times 4 \\) เก็บมาตราส่วนไว้ได้ด้วย ซึ่งจำเป็นเมื่อหุ่นยนต์ยืดหดตามอุณหภูมิ', en: 'Because a \\( 4 \\times 4 \\) matrix can hold a scale factor, needed as a robot expands with heat' },
        { th: 'เพราะใช้หน่วยความจำน้อยกว่า การเก็บเมทริกซ์ก้อนเดียวประหยัดกว่าเก็บสองก้อนแยกกัน', en: 'Because it uses less memory: one matrix is cheaper to store than a matrix and a vector' },
        { th: 'เพราะคำนวณเร็วกว่า การคูณเมทริกซ์ \\( 4 \\times 4 \\) ใช้การคูณน้อยกว่าวิธีแยกกัน', en: 'Because it is faster: a \\( 4 \\times 4 \\) product needs fewer multiplications than the separate form' }
      ],
      answer: 0,
      explain: {
        th: 'เมทริกซ์ \\( 4 \\times 4 \\) กินหน่วยความจำ <em>มากกว่า</em> และคูณกัน <em>ช้ากว่า</em> เล็กน้อย สิ่งที่ได้มาคือความเรียบง่ายของสัญกรณ์ ซึ่งทำให้สมการ (9.6) เขียนได้เป็นผลคูณยาวเส้นเดียว ส่วนมาตราส่วนไม่ได้ถูกใช้ในงานหุ่นยนต์ เพราะการแปลงต้องรักษาระยะทางไว้',
        en: 'A \\( 4 \\times 4 \\) matrix uses <em>more</em> memory and multiplies slightly <em>more slowly</em>. What it buys is notational simplicity, which lets equation (9.6) be written as one long product. The scale slot is not used in robotics, where transformations must preserve distances.'
      }
    },
    {
      q: {
        th: 'แขนกลสองลิงก์ต้องวางปลายเครื่องมือลงที่จุดหนึ่งซึ่งอยู่ภายในปริภูมิทำงาน จะมีชุดมุมข้อต่อที่ทำได้กี่ชุด',
        en: 'A two-link arm must put its tool at a point well inside its workspace. How many sets of joint angles achieve that?'
      },
      options: [
        { th: 'ไม่จำกัดจำนวน เพราะมุมข้อต่อเป็นค่าต่อเนื่อง จึงมีค่าที่ใช้ได้เป็นอนันต์', en: 'Infinitely many, the joint angles being continuous and admitting endless values' },
        { th: 'ชุดเดียวเสมอ เพราะตำแหน่งหนึ่งตำแหน่งย่อมมีท่าที่สอดคล้องกันเพียงท่าเดียว', en: 'Exactly one, since a single position corresponds to a single possible pose' },
        { th: 'สองชุด คือข้อศอกขึ้นกับข้อศอกลง ซึ่งวางปลายเครื่องมือลงที่จุดเดียวกันทั้งคู่', en: 'Two, elbow up and elbow down, both placing the tool at the very same point' },
        { th: 'สี่ชุด เพราะข้อต่อแต่ละตัวหมุนได้สองทิศ จึงได้สองคูณสองเป็นสี่ความเป็นไปได้', en: 'Four, each joint turning two ways, giving two times two possibilities' }
      ],
      answer: 2,
      explain: {
        th: 'สมการ (9.19) มีเครื่องหมายบวกลบอยู่หน้าอาร์กโคไซน์ จึงให้ \\( \\theta_2 \\) สองค่าที่มีขนาดเท่ากันแต่เครื่องหมายต่างกัน และแต่ละค่าให้ \\( \\theta_1 \\) หนึ่งค่า ส่วนคำตอบอนันต์เกิดขึ้นเฉพาะเมื่อหุ่นยนต์มีองศาอิสระเกินกว่าที่งานต้องการ ซึ่งแขนสองลิงก์ในระนาบไม่มี',
        en: 'Equation (9.19) carries a plus-or-minus before the arc cosine, giving two values of \\( \\theta_2 \\) of equal size and opposite sign, each with one \\( \\theta_1 \\). Infinitely many solutions arise only when a robot has more degrees of freedom than the task needs, which a planar two-link arm does not.'
      }
    },
    {
      q: {
        th: 'โปรแกรมจลนศาสตร์ย้อนกลับที่ใช้ \\( \\arctan(y/x) \\) แทน \\( \\operatorname{atan2}(y, x) \\) จะเกิดอาการใด',
        en: 'An inverse-kinematics routine using \\( \\arctan(y/x) \\) instead of \\( \\operatorname{atan2}(y, x) \\) shows what symptom?'
      },
      options: [
        { th: 'ความเร็วของข้อต่อพุ่งสูงผิดปกติเมื่อเข้าใกล้ขอบของปริภูมิทำงานด้านนอก', en: 'Joint speeds rise abnormally as the outer edge of the workspace is approached' },
        { th: 'โปรแกรมคืนคำตอบเพียงชุดเดียวแทนที่จะเป็นสองชุด ทำให้เลือกท่าที่เหมาะสมไม่ได้', en: 'The routine returns one solution instead of two, so the better pose cannot be chosen' },
        { th: 'ค่ามุมคลาดเคลื่อนไปเล็กน้อยอย่างสม่ำเสมอ ซึ่งชดเชยได้ด้วยการบวกค่าคงที่เข้าไป', en: 'A small consistent angular error, correctable by adding a constant' },
        { th: 'หุ่นยนต์เหวี่ยงไปอยู่ด้านตรงข้ามของฐาน เมื่อเป้าหมายอยู่ในจตุภาคที่สองหรือสาม', en: 'The robot swings to the opposite side of its base for targets in the second or third quadrant' }
      ],
      answer: 3,
      explain: {
        th: '\\( \\arctan \\) คืนค่าในช่วง \\( \\pm 90\\deg \\) เท่านั้น จุดที่ \\( (x, y) \\) กับ \\( (-x, -y) \\) จึงให้อัตราส่วนเดียวกันและแยกกันไม่ออก ผลคือท่าที่ได้ชี้ผิดด้านไป \\( 180\\deg \\) ส่วนความเร็วที่พุ่งขึ้นใกล้ขอบเป็นเรื่องของจุดเอกฐานตามสมการ (9.26) ซึ่งเกิดขึ้นไม่ว่าจะใช้ฟังก์ชันใด',
        en: '\\( \\arctan \\) returns only \\( \\pm 90\\deg \\), so \\( (x, y) \\) and \\( (-x, -y) \\) give the same ratio and cannot be told apart, leaving a pose \\( 180\\deg \\) the wrong way round. Speeds rising near the edge is the singularity of equation (9.26), which happens whichever function is used.'
      }
    },
    {
      q: {
        th: 'ข้อใดเป็นนิยามเชิงตัวเลขของจุดเอกฐานของแขนกล',
        en: 'Which is the numerical definition of a manipulator singularity?'
      },
      options: [
        { th: 'ท่าที่ปลายเครื่องมืออยู่ห่างจากฐานเกินกว่าผลบวกของความยาวลิงก์ทั้งหมด', en: 'A pose in which the tool lies further from the base than the links can sum to' },
        { th: 'ท่าที่ดีเทอร์มิแนนต์ของจาโคเบียนเป็นศูนย์ ทำให้เมทริกซ์ผกผันของมันไม่มีอยู่', en: 'A pose at which the Jacobian determinant is zero, so its inverse does not exist' },
        { th: 'ท่าที่จลนศาสตร์ย้อนกลับให้คำตอบมากกว่าสองชุด ทำให้ตัวควบคุมเลือกไม่ถูก', en: 'A pose at which the inverse kinematics yields more than two solutions, confusing the controller' },
        { th: 'ท่าที่มุมข้อต่อตัวใดตัวหนึ่งไปชนขีดจำกัดเชิงกลที่ผู้ผลิตกำหนดไว้', en: 'A pose in which some joint has reached the mechanical limit set by the maker' }
      ],
      answer: 1,
      explain: {
        th: 'ขีดจำกัดเชิงกลเป็นคนละเรื่องกัน และจุดที่อยู่นอกปริภูมิทำงานไม่ใช่ท่าเลยเพราะหุ่นยนต์ไปถึงไม่ได้ ส่วนจุดเอกฐานกลับทำให้คำตอบ <em>น้อยลง</em> ไม่ใช่มากขึ้น เพราะสองคำตอบยุบรวมกันเป็นชุดเดียวเมื่อ \\( c_2 = \\pm 1 \\)',
        en: 'A mechanical limit is a different matter, and a point outside the workspace is not a pose at all since the robot cannot reach it. A singularity in fact leaves <em>fewer</em> solutions, not more: the two merge into one when \\( c_2 = \\pm 1 \\).'
      }
    },
    {
      q: {
        th: 'เปรียบเทียบหุ่นยนต์แบบอนุกรมกับแบบขนาน ข้อใดถูกต้อง',
        en: 'Comparing a serial robot with a parallel one, which statement is correct?'
      },
      options: [
        { th: 'แบบขนานแก้ได้ง่ายกว่าทั้งสองทิศทาง เพราะข้อต่อแต่ละเส้นแยกกันคำนวณได้หมด', en: 'The parallel one is easier in both directions, each chain computing independently' },
        { th: 'ทั้งสองแบบมีความยากเท่ากัน เพราะต่างก็ใช้เมทริกซ์การแปลงเอกพันธ์ชุดเดียวกัน', en: 'They are equally hard, both using the same homogeneous transformations' },
        { th: 'แบบอนุกรมแก้จลนศาสตร์ไปข้างหน้าง่าย ส่วนแบบขนานแก้จลนศาสตร์ย้อนกลับง่าย', en: 'The serial one has the easy forward problem, the parallel one the easy inverse' },
        { th: 'แบบอนุกรมแก้ได้ง่ายกว่าทั้งสองทิศทาง เพราะโครงสร้างเป็นโซ่เส้นเดียวที่ไม่ซับซ้อน', en: 'The serial one is easier in both directions, being a single uncomplicated chain' }
      ],
      answer: 2,
      explain: {
        th: 'แบบอนุกรมคำนวณไปข้างหน้าได้ด้วยการคูณเมทริกซ์ตรง ๆ แต่ย้อนกลับต้องแก้สมการไม่เชิงเส้น ส่วนแบบขนานกลับกัน เพราะเมื่อรู้ตำแหน่งแพลตฟอร์มแล้ว แต่ละแขนแก้แยกกันได้ตามสมการ (9.28) แต่การหาตำแหน่งแพลตฟอร์มจากมุมมอเตอร์ต้องหาจุดตัดของทรงกลมสามลูกพร้อมกัน',
        en: 'A serial arm computes forward by plain matrix multiplication but needs nonlinear equations in reverse. A parallel one is the opposite: with the platform position known, each arm solves on its own by equation (9.28), while finding the platform from the motor angles means intersecting three spheres at once.'
      }
    },
    {
      q: {
        th: 'โปรแกรมที่จำลองผ่านทุกจุดแล้ว เมื่อนำไปเดินจริงกลับพบว่าปลายเครื่องมือห่างจากเป้าหมาย 1.5 mm สม่ำเสมอ สาเหตุที่น่าจะเป็นที่สุดคือข้อใด',
        en: 'A program that passed every check in simulation misses the target by a consistent 1.5 mm on the real robot. The likeliest cause is which?'
      },
      options: [
        { th: 'ความแม่นยำของหุ่นยนต์จริงต่างจากค่าออกแบบที่โปรแกรมจำลองใช้คำนวณ', en: 'The real robot&rsquo;s accuracy differs from the design values the simulator computed with' },
        { th: 'ความเที่ยงตรงของหุ่นยนต์ไม่ดีพอ ควรเปลี่ยนชุดเกียร์ที่ข้อต่อสองตัวแรกก่อน', en: 'The robot&rsquo;s repeatability is inadequate; replace the gearboxes on the first two joints' },
        { th: 'พารามิเตอร์ DH ที่โปรแกรมจำลองใช้เป็นคนละธรรมเนียมกับที่ตัวควบคุมใช้อยู่', en: 'The simulator&rsquo;s DH parameters follow a different convention from the controller&rsquo;s' },
        { th: 'ตัวแปลงโปรแกรมแปลงคำสั่งผิดพลาด ควรเปลี่ยนไปใช้ตัวแปลงรุ่นอื่นแล้วส่งออกใหม่', en: 'The post-processor translated the commands wrongly; use another and export again' }
      ],
      answer: 0,
      explain: {
        th: 'คำว่า “สม่ำเสมอ” ตัดเรื่องความเที่ยงตรงออกไป เพราะความเที่ยงตรงที่แย่จะทำให้ค่าผิด <em>ไม่เท่ากัน</em> ในแต่ละครั้ง ส่วนธรรมเนียม DH ที่ผิดกันจะทำให้ตำแหน่งผิดเป็นเซนติเมตรหรือมากกว่า ไม่ใช่มิลลิเมตรเดียว ความคลาดเคลื่อนระดับมิลลิเมตรที่คงที่คือลายเซ็นของความแม่นยำตามหัวข้อ 8.4',
        en: 'The word “consistent” rules out repeatability, which would make the error <em>differ</em> from run to run. A mismatched DH convention would be out by centimetres or more, not by a single millimetre. A steady millimetre-scale offset is the signature of accuracy, as §8.4 described.'
      }
    }
  ]
});

AMRQuiz.mount('ch09-post', {
  type: 'post',
  chapter: 'ch09',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 9', en: 'Post-test — Chapter 9' },
  intro: {
    th: 'สิบข้อ เน้นการคำนวณเมทริกซ์ การแก้จลนศาสตร์ย้อนกลับ การวินิจฉัยจุดเอกฐาน และการตัดสินใจเชิงโครงสร้าง เกณฑ์ผ่าน 70%',
    en: 'Ten items on matrix work, solving the inverse problem, diagnosing a singularity and judging a structure. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'หน้าแปลนอยู่ที่ \\( (300, 200, 0) \\) mm และหมุน \\( 90\\deg \\) รอบแกน \\( z \\) ของเฟรมฐาน มือจับทำให้ TCP อยู่ที่ \\( (0, 100, 0) \\) mm ในเฟรมเครื่องมือ TCP อยู่ที่ใดในเฟรมฐาน',
        en: 'A flange sits at \\( (300, 200, 0) \\) mm, rotated \\( 90\\deg \\) about the base frame&rsquo;s \\( z \\). The gripper puts the TCP at \\( (0, 100, 0) \\) mm in the tool frame. Where is it in the base frame?'
      },
      options: [
        { th: '\\( (400, 200, 0) \\) mm จากการบวกขนาดของเวกเตอร์เครื่องมือเข้าที่แกน \\( x \\) แทน', en: '\\( (400, 200, 0) \\) mm, adding the tool vector&rsquo;s length onto the \\( x \\) axis instead' },
        { th: '\\( (300, 100, 0) \\) mm จากการหมุนไปในทิศตรงข้าม คือใช้ \\( -90\\deg \\) แทนที่จะเป็น \\( +90\\deg \\)', en: '\\( (300, 100, 0) \\) mm, rotating the other way, by \\( -90\\deg \\) rather than \\( +90\\deg \\)' },
        { th: '\\( (200, 200, 0) \\) mm จากการหมุนเวกเตอร์เครื่องมือเข้าเฟรมฐานก่อนแล้วจึงบวก', en: '\\( (200, 200, 0) \\) mm, rotating the tool vector into the base frame before adding it' },
        { th: '\\( (300, 300, 0) \\) mm จากการบวกเวกเตอร์ทั้งสองโดยตรงโดยไม่ผ่านการหมุนก่อน', en: '\\( (300, 300, 0) \\) mm, adding the two vectors directly with no rotation applied' }
      ],
      answer: 2,
      explain: {
        th: '\\( \\mathbf{R}_z(90\\deg) \\) ส่ง \\( (0, 100, 0) \\) ไปเป็น \\( (-100, 0, 0) \\) จึงได้ \\( (300 - 100,\\ 200,\\ 0) \\) การบวกตรง ๆ คือการใช้สมการ (8.15) ซึ่งใช้ได้เฉพาะเมื่อเครื่องมือไม่หมุน และที่นี่ผิดไป 141 mm',
        en: '\\( \\mathbf{R}_z(90\\deg) \\) sends \\( (0, 100, 0) \\) to \\( (-100, 0, 0) \\), giving \\( (300 - 100,\\ 200,\\ 0) \\). Adding directly is equation (8.15), valid only while the tool does not rotate, and here it is out by 141 mm.'
      }
    },
    {
      q: {
        th: 'นักศึกษาคำนวณเมทริกซ์การหมุนออกมาได้ค่าหนึ่ง แล้วพบว่าดีเทอร์มิแนนต์เท่ากับ \\( -1 \\) พอดี ข้อสรุปใดถูกต้อง',
        en: 'A student computes a rotation matrix and finds its determinant to be exactly \\( -1 \\). Which conclusion is right?'
      },
      options: [
        { th: 'สลับทิศแกนไปหนึ่งแกนจนกลายเป็นระบบมือซ้าย ผลคือการเคลื่อนที่จะสะท้อนกลับด้าน', en: 'One axis has been flipped into a left-handed set, so the motion comes out mirrored' },
        { th: 'มีความคลาดเคลื่อนจากการปัดเศษสะสม ควรคำนวณใหม่ด้วยทศนิยมที่มากขึ้น', en: 'Rounding has accumulated; recompute with more decimal places' },
        { th: 'หมุนไปเกิน \\( 180\\deg \\) ซึ่งทำให้เครื่องหมายของดีเทอร์มิแนนต์กลับด้าน', en: 'The rotation exceeds \\( 180\\deg \\), which reverses the determinant&rsquo;s sign' },
        { th: 'ถูกต้องแล้ว เพราะดีเทอร์มิแนนต์เป็น \\( -1 \\) เมื่อหมุนไปในทิศทวนเข็มนาฬิกา', en: 'It is correct: the determinant is \\( -1 \\) for a counter-clockwise rotation' }
      ],
      answer: 0,
      explain: {
        th: 'สมการ (9.2) ระบุว่าดีเทอร์มิแนนต์ของเมทริกซ์การหมุนเป็น \\( +1 \\) เสมอ ไม่ว่าจะหมุนไปทางใดหรือกี่องศา ค่า \\( -1 \\) จึงไม่ใช่การหมุน แต่เป็นการหมุนรวมกับการสะท้อน และการปัดเศษจะให้ค่าใกล้ \\( +1 \\) ไม่ใช่กระโดดไปเป็น \\( -1 \\) พอดี',
        en: 'Equation (9.2) states that a rotation matrix has determinant \\( +1 \\) always, whichever way and however far it turns. A value of \\( -1 \\) is therefore not a rotation but a rotation combined with a reflection, and rounding would give something near \\( +1 \\), not exactly \\( -1 \\).'
      }
    },
    {
      q: {
        th: 'SCARA มี \\( L_1 = 350 \\) mm และ \\( L_2 = 200 \\) mm ที่ \\( \\theta_1 = 60\\deg \\) และ \\( \\theta_2 = 40\\deg \\) ปลายเครื่องมืออยู่ที่ใด',
        en: 'A SCARA has \\( L_1 = 350 \\) mm and \\( L_2 = 200 \\) mm. At \\( \\theta_1 = 60\\deg \\) and \\( \\theta_2 = 40\\deg \\), where is the tool?'
      },
      options: [
        { th: '\\( (275, 476) \\) mm จากการบวกความยาวลิงก์เข้าด้วยกันก่อนแล้วจึงใช้มุมแรกเพียงมุมเดียว', en: '\\( (275, 476) \\) mm, adding the link lengths first and then applying only the first angle' },
        { th: '\\( (328, 432) \\) mm จากการใช้ \\( \\theta_2 \\) เพียงลำพังกับลิงก์ที่สอง แทนผลบวกของสองมุม', en: '\\( (328, 432) \\) mm, using \\( \\theta_2 \\) alone for the second link rather than the sum' },
        { th: '\\( (500, 140) \\) mm จากการสลับไซน์กับโคไซน์ในสูตรของทั้งสองแกน ทำให้ค่าสลับที่กัน', en: '\\( (500, 140) \\) mm, from interchanging the sine and the cosine throughout both axes' },
        { th: '\\( (140, 500) \\) mm จากการแทนค่าในสมการ (9.14) โดยใช้ผลบวกของมุมกับลิงก์ที่สอง', en: '\\( (140, 500) \\) mm, substituting into equation (9.14) with the angle sum on link two' }
      ],
      answer: 3,
      explain: {
        th: 'สมการ (9.14) ให้ \\( x = 350\\cos 60\\deg + 200\\cos 100\\deg = 175 - 34.7 = 140 \\) mm และ \\( y = 350\\sin 60\\deg + 200\\sin 100\\deg = 303 + 197 = 500 \\) mm ความผิดพลาดที่พบบ่อยที่สุดคือลืมบวกมุมสำหรับลิงก์ที่สอง เพราะมุมข้อต่อวัดเทียบกับลิงก์ก่อนหน้า ไม่ได้วัดเทียบกับฐาน',
        en: 'Equation (9.14) gives \\( x = 350\\cos 60\\deg + 200\\cos 100\\deg = 175 - 34.7 = 140 \\) mm and \\( y = 350\\sin 60\\deg + 200\\sin 100\\deg = 303 + 197 = 500 \\) mm. The commonest slip is omitting the sum for the second link, because a joint angle is measured against the previous link rather than against the base.'
      }
    },
    {
      q: {
        th: 'แขนที่มี \\( L_1 = 400 \\) mm และ \\( L_2 = 250 \\) mm ถูกสั่งให้ไปที่จุดห่างจากฐาน 700 mm โปรแกรมควรทำอย่างไร',
        en: 'An arm with \\( L_1 = 400 \\) mm and \\( L_2 = 250 \\) mm is commanded to a point 700 mm from the base. What should the program do?'
      },
      options: [
        { th: 'เลือกคำตอบที่ใกล้เคียงที่สุด คือเหยียดแขนตรงไปทางนั้นแล้วหยุดที่ขอบปริภูมิทำงาน', en: 'Take the nearest solution, extending straight that way and stopping at the workspace edge' },
        { th: 'รายงานว่าเอื้อมไม่ถึง เพราะ \\( c_2 \\) ที่คำนวณได้มีค่า 1.34 ซึ่งเกินช่วงของอาร์กโคไซน์', en: 'Report it unreachable: the computed \\( c_2 \\) is 1.34, outside the range of arc cosine' },
        { th: 'ใช้คำตอบแบบข้อศอกลงแทน เพราะข้อศอกลงให้ระยะเอื้อมที่มากกว่าข้อศอกขึ้นเสมอ', en: 'Use the elbow-down solution, which always reaches further than elbow up' },
        { th: 'คำนวณต่อไปตามปกติ แล้วปล่อยให้ตัวควบคุมของหุ่นยนต์ตรวจจับขีดจำกัดเองในภายหลัง', en: 'Compute on as normal and let the robot controller catch the limit later' }
      ],
      answer: 1,
      explain: {
        th: 'สมการ (9.18) ให้ \\( c_2 = (700^2 - 400^2 - 250^2)/200\\,000 = 1.34 \\) และสมการ (9.19) ต้องการ \\( \\lvert c_2 \\rvert \\le 1 \\) จุดนั้นจึงอยู่นอกปริภูมิทำงาน ข้อศอกขึ้นกับข้อศอกลงให้ระยะเอื้อมเท่ากันทุกประการ และการส่งคำสั่งที่แก้ไม่ได้ต่อไปให้ตัวควบคุมเป็นการโยนความผิดพลาดไปให้ชั้นที่ตรวจพบมันได้ช้าที่สุด',
        en: 'Equation (9.18) gives \\( c_2 = (700^2 - 400^2 - 250^2)/200\\,000 = 1.34 \\), and equation (9.19) requires \\( \\lvert c_2 \\rvert \\le 1 \\), so the point lies outside the workspace. Elbow up and elbow down reach exactly as far as each other, and passing an unsolvable command onward hands the error to the layer that will notice it last.'
      }
    },
    {
      q: {
        th: 'คำตอบสองชุดของจลนศาสตร์ย้อนกลับของแขนสองลิงก์ ข้อใดกล่าวถูกต้อง',
        en: 'About the two inverse-kinematics solutions of a two-link arm, which statement is true?'
      },
      options: [
        { th: 'ทั้งสองชุดวางเครื่องมือลงที่จุดเดียวกันพอดี แต่มีเส้นทางและการหลบสิ่งกีดขวางต่างกัน', en: 'Both put the tool at precisely the same point, but differ in path and in what they clear' },
        { th: 'ชุดหนึ่งเป็นคำตอบจริงและอีกชุดเป็นคำตอบลวงที่เกิดจากการยกกำลังสองในการแก้สมการ', en: 'One is genuine and the other spurious, introduced by squaring during the derivation' },
        { th: 'ทั้งสองชุดวางเครื่องมือลงใกล้กันแต่ไม่ตรงกัน ส่วนต่างคือความคลาดเคลื่อนของวิธีแก้', en: 'Both put the tool near the same point but not exactly, the gap being the method&rsquo;s error' },
        { th: 'ชุดที่ให้ \\( \\theta_2 \\) เป็นบวกวางเครื่องมือได้แม่นกว่า เพราะข้อต่อเดินทางน้อยกว่าเสมอ', en: 'The solution with positive \\( \\theta_2 \\) places the tool more accurately, the joints moving less' }
      ],
      answer: 0,
      explain: {
        th: 'แทนคำตอบทั้งสองกลับเข้าสมการ (9.13) จะได้พิกัดเดิมพอดีทั้งคู่ ไม่มีชุดใดเป็นคำตอบลวง ความแม่นยำก็เท่ากันเพราะเป็นหุ่นยนต์ตัวเดียวกัน สิ่งที่ต่างคือเส้นทางที่ข้อต่อเดิน ระยะทางจากท่าปัจจุบัน และโอกาสชนสิ่งกีดขวาง ซึ่งเป็นเกณฑ์ที่ใช้เลือกจริง',
        en: 'Substituting either back into equation (9.13) returns the original coordinates exactly; neither is spurious. The accuracy is identical, it being the same robot. What differs is the path the joints take, the distance from the present pose and what they might hit — and those are the criteria that actually decide.'
      }
    },
    {
      q: {
        th: 'แขนที่มี \\( L_1 = 400 \\) mm และ \\( L_2 = 250 \\) mm ทำงานที่ \\( \\theta_2 = 10\\deg \\) ความเร็วข้อต่อที่ต้องใช้สูงกว่าตอน \\( \\theta_2 = 90\\deg \\) กี่เท่า',
        en: 'An arm with \\( L_1 = 400 \\) mm and \\( L_2 = 250 \\) mm works at \\( \\theta_2 = 10\\deg \\). How much faster must its joints move than at \\( \\theta_2 = 90\\deg \\)?'
      },
      options: [
        { th: 'ประมาณ 0.17 เท่า เพราะตัวคูณเป็นไซน์ของมุมข้อต่อที่สองโดยตรงไม่ใช่ส่วนกลับ', en: 'About 0.17 times, the factor being the sine of that angle itself rather than its reciprocal' },
        { th: 'เท่าเดิม เพราะความเร็วของข้อต่อถูกกำหนดโดยความเร็วที่สั่งปลายเครื่องมือเท่านั้น', en: 'The same, joint speed being fixed by the commanded tool speed alone' },
        { th: 'ประมาณ 5.8 เท่า เพราะตัวคูณเป็นส่วนกลับของไซน์ของมุมข้อต่อที่สองตามสมการ (9.26)', en: 'About 5.8 times, the factor being the reciprocal of the sine of that angle, by equation (9.26)' },
        { th: 'ประมาณ 9 เท่า เพราะมุมลดลงจากเก้าสิบองศาเหลือสิบองศา คือลดลงเป็นเก้าเท่าพอดี', en: 'About 9 times, the angle having fallen from ninety degrees to ten, a factor of nine' }
      ],
      answer: 2,
      explain: {
        th: 'สมการ (9.26) ให้ตัวคูณ \\( 1/\\lvert\\sin\\theta_2\\rvert \\) ที่ \\( 90\\deg \\) ค่านี้เป็น 1.0 และที่ \\( 10\\deg \\) เป็น \\( 1/0.174 = 5.8 \\) ข้อที่ตอบ 0.17 สลับส่วนกลับ ซึ่งจะหมายความว่าข้อต่อเดินช้าลงใกล้จุดเอกฐาน ตรงข้ามกับที่เกิดขึ้นจริง',
        en: 'Equation (9.26) gives the factor \\( 1/\\lvert\\sin\\theta_2\\rvert \\): 1.0 at \\( 90\\deg \\) and \\( 1/0.174 = 5.8 \\) at \\( 10\\deg \\). The 0.17 answer inverts the reciprocal, which would mean the joints slow down near a singularity — the opposite of what happens.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 9.3 เมื่อเลื่อนระยะเป้าหมายออกไปจนถึง 650 mm พอดี สิ่งที่สังเกตได้คือข้อใด',
        en: 'In Animation 9.3, moving the target radius out to exactly 650 mm shows what?'
      },
      options: [
        { th: 'คำตอบทั้งสองชุดแยกออกจากกันมากที่สุด ขณะที่ \\( \\det \\mathbf{J} \\) ขึ้นถึงค่าสูงสุด', en: 'The two solutions separate as far as possible while \\( \\det \\mathbf{J} \\) reaches its maximum' },
        { th: 'คำตอบทั้งสองชุดยุบรวมเป็นชุดเดียว ขณะที่ \\( \\det \\mathbf{J} \\) ลดลงจนเป็นศูนย์พอดี', en: 'The two solutions merge into one while \\( \\det \\mathbf{J} \\) falls exactly to zero' },
        { th: 'คำตอบทั้งสองชุดยังคงอยู่ครบ แต่ \\( \\det \\mathbf{J} \\) เปลี่ยนเครื่องหมายจากบวกเป็นลบ', en: 'Both solutions remain while \\( \\det \\mathbf{J} \\) changes sign from positive to negative' },
        { th: 'แอนิเมชันหยุดคำนวณและแจ้งว่าเอื้อมไม่ถึง เพราะเกินระยะเอื้อมสูงสุดของแขนไปแล้ว', en: 'The animation stops and reports the point unreachable, being beyond maximum reach' }
      ],
      answer: 1,
      explain: {
        th: 'ที่ \\( r = L_1 + L_2 \\) พอดี สมการ (9.18) ให้ \\( c_2 = 1 \\) ดังนั้น \\( \\theta_2 = 0 \\) ทั้งสองคำตอบ จึงเหลือท่าเดียวคือแขนเหยียดตรง และสมการ (9.25) ให้ \\( \\det \\mathbf{J} = L_1 L_2 \\sin 0 = 0 \\) จุดนี้ยังเอื้อมถึงได้พอดี ไม่ใช่เอื้อมไม่ถึง แต่เป็นจุดที่ใช้งานจริงไม่ได้เพราะความเร็วข้อต่อที่ต้องใช้ไม่มีขอบเขต',
        en: 'At exactly \\( r = L_1 + L_2 \\), equation (9.18) gives \\( c_2 = 1 \\), so \\( \\theta_2 = 0 \\) in both solutions and only the straight-arm pose remains, while equation (9.25) gives \\( \\det \\mathbf{J} = L_1 L_2 \\sin 0 = 0 \\). The point is just reachable rather than unreachable — but unusable, since the joint speed required is unbounded.'
      }
    },
    {
      q: {
        th: 'สายคัดบรรจุต้องหยิบผลไม้ 70 ชิ้นต่อนาทีในพื้นที่กว้าง 600 mm ควรเลือกโครงสร้างใดและเพราะเหตุใด',
        en: 'A packing line must pick 70 fruits a minute within a 600 mm span. Which structure, and why?'
      },
      options: [
        { th: 'แบบอนุกรม เพราะแก้จลนศาสตร์ย้อนกลับได้ง่ายกว่า ตัวควบคุมจึงคำนวณได้ทันทุกรอบ', en: 'Serial: its inverse kinematics is easier, so the controller keeps up each cycle' },
        { th: 'แบบขนาน เพราะปริภูมิทำงานกว้างกว่าเมื่อเทียบกับขนาดตัวของหุ่นยนต์ที่ติดตั้งไป', en: 'Parallel: its workspace is larger for the size of the robot that is installed' },
        { th: 'แบบอนุกรม เพราะความแข็งเกร็งสูงกว่า ความคลาดเคลื่อนจึงไม่สะสมไปตามโซ่ของลิงก์', en: 'Serial: it is stiffer, so errors do not accumulate along the chain of links' },
        { th: 'แบบขนาน เพราะมอเตอร์อยู่ที่ฐาน มวลที่ต้องเร่งจึงน้อย และปริภูมิแคบก็ยังพอกับงานนี้', en: 'Parallel: the motors stay on the base, so little mass accelerates and the span suffices' }
      ],
      answer: 3,
      explain: {
        th: 'ตารางเปรียบเทียบในหัวข้อ 9.6 ระบุว่าแบบขนานมีปริภูมิทำงาน <em>แคบกว่า</em> และแข็งเกร็ง <em>มากกว่า</em> ส่วนแบบอนุกรมแก้จลนศาสตร์ย้อนกลับได้ <em>ยากกว่า</em> ไม่ใช่ง่ายกว่า เหตุผลที่ใช้ได้จริงคือมวลที่ต้องเร่ง ซึ่งตามสมการ (8.14) เป็นตัวกำหนดเวลารอบในการเคลื่อนที่ระยะสั้น',
        en: 'The comparison in §9.6 records that a parallel robot has a <em>smaller</em> workspace and is the <em>stiffer</em> of the two, while a serial arm has the <em>harder</em> inverse problem, not the easier. The reason that survives is the mass to be accelerated, which by equation (8.14) sets the cycle time over short moves.'
      }
    },
    {
      q: {
        th: 'ทีมหนึ่งคัดลอกตาราง DH จากคู่มือยี่ห้อหนึ่งมาใช้ แล้วพบว่าตำแหน่งที่คำนวณได้ผิดจากที่หุ่นยนต์รายงานไปหลายเซนติเมตร วิธีตรวจสอบที่เร็วที่สุดคือข้อใด',
        en: 'A team copies a DH table from one vendor&rsquo;s manual and finds its computed positions out by several centimetres. What is the quickest check?'
      },
      options: [
        { th: 'แทนค่าท่าบ้านลงในสมการ แล้วเทียบตำแหน่งที่ได้กับที่หุ่นยนต์รายงานที่ท่าเดียวกัน', en: 'Substitute the home pose and compare the computed position with the robot&rsquo;s own' },
        { th: 'สอบเทียบหุ่นยนต์ใหม่ทั้งตัว เพื่อให้ความยาวลิงก์จริงตรงกับค่าออกแบบในคู่มือมากที่สุด', en: 'Recalibrate the whole robot so its real link lengths match the manual&rsquo;s design values' },
        { th: 'วัดความยาวลิงก์จริงด้วยเวอร์เนียทุกลิงก์ แล้วแทนค่าที่วัดได้ลงในตารางแทนค่าจากคู่มือ', en: 'Measure every link with callipers and substitute the measured values for the manual&rsquo;s' },
        { th: 'เพิ่มความละเอียดของการคำนวณเป็นทศนิยมสองเท่า เพื่อตัดความคลาดเคลื่อนจากการปัดเศษ', en: 'Double the precision of the arithmetic, to rule out accumulated rounding error' }
      ],
      answer: 0,
      explain: {
        th: 'ความคลาดเคลื่อนระดับเซนติเมตรใหญ่เกินกว่าจะเกิดจากการปัดเศษหรือความยาวลิงก์ที่ผิดไปเล็กน้อย จึงเป็นความผิดพลาดเชิงธรรมเนียมตามที่หัวข้อ 9.3 เตือนไว้ การแทนท่าบ้านใช้เวลาไม่กี่นาทีและแยกแยะได้ทันที ส่วนการสอบเทียบทั้งตัวมีค่าใช้จ่ายสูงและไม่ได้แก้ปัญหานี้เลยเพราะตารางยังผิดอยู่',
        en: 'An error of centimetres is far too large for rounding or for slightly wrong link lengths, so it is a convention mismatch of the kind §9.3 warns about. Substituting the home pose takes minutes and settles it at once, whereas a full calibration is expensive and fixes nothing here, the table still being wrong.'
      }
    },
    {
      q: {
        th: 'สถานีจำลองใน RoboDK ผ่านการตรวจการชนและการเอื้อมถึงครบทุกจุด ข้อสรุปใดเหมาะสมที่สุดก่อนนำไปเดินจริง',
        en: 'A RoboDK station passes every reach and collision check. What is the soundest conclusion before running for real?'
      },
      options: [
        { th: 'ต้องสอบเทียบหุ่นยนต์ทั้งตัวก่อนทุกครั้ง มิฉะนั้นโปรแกรมนอกสายการผลิตจะใช้ไม่ได้เลย', en: 'Calibrate the whole robot first, or offline programming cannot be used at all' },
        { th: 'ต้องสอนจุดใหม่ทั้งหมดบนหุ่นยนต์จริง เพราะจุดที่สร้างในโปรแกรมจำลองใช้แทนกันไม่ได้', en: 'Re-teach every point on the real robot, simulated points being unusable as substitutes' },
        { th: 'เดินได้เลยที่ความเร็วปกติ เพราะการตรวจในโปรแกรมครอบคลุมทุกความเสี่ยงที่เป็นไปได้แล้ว', en: 'Run at full speed: the checks in software have covered every possible risk' },
        { th: 'ต้องเดินรอบแรกที่ความเร็วต่ำและแตะจุดอ้างอิงจริง เพราะโปรแกรมใช้ค่าออกแบบไม่ใช่ค่าจริง', en: 'Run the first pass slowly and touch up a real reference, the software having used design values' }
      ],
      answer: 3,
      explain: {
        th: 'ถ้าต้องสอนจุดใหม่ทั้งหมด การเขียนโปรแกรมนอกสายการผลิตก็ไม่มีประโยชน์เลย และการสอบเทียบทั้งตัวมีค่าใช้จ่ายสูงเกินกว่าจะทำทุกงาน วิธีที่ใช้จริงในอุตสาหกรรมคือแตะจุดอ้างอิงเพียงไม่กี่จุดเพื่อปรับเฟรมชิ้นงาน ซึ่งชดเชยส่วนต่างระดับมิลลิเมตรที่เกิดจากความแม่นยำตามหัวข้อ 8.4 ได้เพียงพอ',
        en: 'If every point had to be re-taught, offline programming would be pointless, and a full calibration costs too much to do for every job. What industry actually does is touch up a few reference points to correct the work-object frame, which compensates for the millimetre-scale gap that the accuracy of §8.4 creates.'
      }
    }
  ]
});
