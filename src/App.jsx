import { useState, useEffect } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

function App() {
  const workoutPlan = {
    monday: [
      {
        name: "덤벨 스쿼트",
        reps: "15회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      },
      {
        name: "덤벨 런지",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
      },
      {
        name: "루마니안 데드리프트",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg",
      },
      {
        name: "테이블 스텝업",
        reps: "15회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg",
      },
      {
        name: "플랭크",
        reps: "45초",
        sets: 3,
        image:
          "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
      },
      {
        name: "레그레이즈",
        reps: "15회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
      },
    ],

    tuesday: [
      {
        name: "덤벨 로우",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
      },
      {
        name: "숄더 프레스",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg",
      },
      {
        name: "사이드 레터럴 레이즈",
        reps: "15회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/6456308/pexels-photo-6456308.jpeg",
      },
      {
        name: "봉 오버헤드 프레스",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      },
      {
        name: "슈퍼맨 자세",
        reps: "15회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
      },
      {
        name: "버드독",
        reps: "15회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg",
      },
    ],

    wednesday: [
      {
        name: "버피",
        reps: "10회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg",
      },
      {
        name: "마운틴 클라이머",
        reps: "30초",
        sets: 3,
        image:
          "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
      },
      {
        name: "제자리 스쿼트",
        reps: "20회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      },
      {
        name: "스텝 터치",
        reps: "30초",
        sets: 3,
        image:
          "https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg",
      },
      {
        name: "니업",
        reps: "20회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg",
      },
      {
        name: "플랭크",
        reps: "45초",
        sets: 3,
        image:
          "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
      },
    ],

    thursday: [
      {
        name: "푸쉬업",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
      },
      {
        name: "테이블 인클라인 푸쉬업",
        reps: "15회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg",
      },
      {
        name: "덤벨 컬",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/5327466/pexels-photo-5327466.jpeg",
      },
      {
        name: "킥백",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/6456147/pexels-photo-6456147.jpeg",
      },
      {
        name: "봉 컬",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      },
      {
        name: "플랭크 숄더터치",
        reps: "20회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
      },
    ],

    friday: [
      {
        name: "와이드 스쿼트",
        reps: "15회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      },
      {
        name: "사이드 런지",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
      },
      {
        name: "힙브릿지",
        reps: "20회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg",
      },
      {
        name: "카프레이즈",
        reps: "20회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/6740754/pexels-photo-6740754.jpeg",
      },
      {
        name: "덤벨 데드리프트",
        reps: "12회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg",
      },
      {
        name: "월싯",
        reps: "45초",
        sets: 3,
        image:
          "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      },
    ],

    saturday: [
      {
        name: "사이드 플랭크",
        reps: "30초",
        sets: 3,
        image:
          "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
      },
      {
        name: "데드버그",
        reps: "15회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
      },
      {
        name: "크런치",
        reps: "20회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg",
      },
      {
        name: "러시안 트위스트",
        reps: "20회",
        sets: 3,
        image:
          "https://images.pexels.com/photos/4720528/pexels-photo-4720528.jpeg",
      },
      {
        name: "전신 스트레칭",
        reps: "5분",
        sets: 1,
        image:
          "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
      },
      {
        name: "이완 운동",
        reps: "5분",
        sets: 1,
        image:
          "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg",
      },
    ],
  }

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]

  const today = days[new Date().getDay()]
  const exercises = workoutPlan[today] || []

  const [doneList, setDoneList] = useState([])
  const [restTime, setRestTime] = useState(0)
  const [weight, setWeight] = useState("")

  const [weightHistory, setWeightHistory] =
    useState(() => {
      const saved =
        localStorage.getItem("weightHistory")
      return saved ? JSON.parse(saved) : []
    })

  useEffect(() => {
    const saved = localStorage.getItem(today)

    if (saved) {
      const parsed = JSON.parse(saved)

      const fixed = exercises.map(
        (exercise, index) => {
          if (
            parsed[index] &&
            parsed[index].length === exercise.sets
          ) {
            return parsed[index]
          }

          return Array(exercise.sets).fill(false)
        }
      )

      setDoneList(fixed)
    } else {
      setDoneList(
        exercises.map((exercise) =>
          Array(exercise.sets).fill(false)
        )
      )
    }
  }, [today])

  useEffect(() => {
    if (doneList.length > 0) {
      localStorage.setItem(
        today,
        JSON.stringify(doneList)
      )
    }
  }, [doneList, today])

  useEffect(() => {
    localStorage.setItem(
      "weightHistory",
      JSON.stringify(weightHistory)
    )
  }, [weightHistory])

  useEffect(() => {
    if (restTime <= 0) return

    const timer = setTimeout(() => {
      setRestTime(restTime - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [restTime])

  const toggleSet = (
    exerciseIndex,
    setIndex
  ) => {
    const updated = [...doneList]

    updated[exerciseIndex][setIndex] =
      !updated[exerciseIndex][setIndex]

    setDoneList(updated)

    setRestTime(45)

    const audio = new Audio("/alarm.mp3")

    setTimeout(() => {
      audio.play()
    }, 45000)
  }

  const saveWeight = () => {
    if (!weight) return

    const todayDate =
      new Date().toLocaleDateString()

    const newHistory = [
      {
        date: todayDate,
        weight: Number(weight),
      },
      ...weightHistory,
    ]

    setWeightHistory(newHistory)

    setWeight("")
  }

  const totalSets = exercises.reduce(
    (sum, exercise) => sum + exercise.sets,
    0
  )

  const completedSets =
    doneList.flat().filter(Boolean).length

  const progress =
    totalSets > 0
      ? Math.round(
          (completedSets / totalSets) * 100
        )
      : 0

  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "20px",
          maxWidth: "520px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          오늘의 운동
        </h1>

        <h2
          style={{
            textAlign: "center",
            color: "#2563eb",
          }}
        >
          {today.toUpperCase()}
        </h2>

        <h3
          style={{
            textAlign: "center",
          }}
        >
          진행률 {progress}%
        </h3>

        {restTime > 0 && (
          <div
            style={{
              backgroundColor: "#dbeafe",
              padding: "18px",
              borderRadius: "14px",
              marginBottom: "20px",
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            쉬는시간 {restTime}초
          </div>
        )}

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h3>오늘 몸무게</h3>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <input
              type="number"
              placeholder="몸무게 입력"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.value)
              }
              style={{
                flex: 1,
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />

            <button
              onClick={saveWeight}
              style={{
                padding: "14px 18px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
                fontSize: "15px",
              }}
            >
              저장
            </button>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "220px",
            marginBottom: "30px",
          }}
        >
          <ResponsiveContainer>
            <LineChart data={weightHistory}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="weight"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {exercises.map(
          (exercise, exerciseIndex) => (
            <div
              key={exerciseIndex}
              style={{
                backgroundColor: "#fff",
                borderRadius: "18px",
                padding: "18px",
                marginBottom: "22px",
                border: "1px solid #ddd",
              }}
            >
              <img
                src={exercise.image}
                alt={exercise.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  marginBottom: "14px",
                }}
              />

              <h2>{exercise.name}</h2>

              <p>
                {exercise.reps} ×{" "}
                {exercise.sets}세트
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "12px",
                }}
              >
                {Array.from({
                  length: exercise.sets,
                }).map((_, setIndex) => {
                  const done =
                    doneList[exerciseIndex]?.[
                      setIndex
                    ] || false

                  return (
                    <button
                      key={setIndex}
                      onClick={() =>
                        toggleSet(
                          exerciseIndex,
                          setIndex
                        )
                      }
                      style={{
                        backgroundColor: done
                          ? "green"
                          : "black",
                        color: "white",
                        border: "none",
                        padding: "16px 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        minWidth: "110px",
                        cursor: "pointer",
                      }}
                    >
                      {done
                        ? `${setIndex + 1}세트 완료`
                        : `${setIndex + 1}세트`}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default App