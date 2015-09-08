Ruby宿題


- クラスを作ってみよう

	```
	class Person; end
	obj = Person.new
	
	obj.class
	Person.superclass
	
	```
- 属性を持たせてみよう
	```
	class Person
		def initialize(name)
			@name = name
		end
	end
	
	matz = Person.new('matz')
	```
- 属性にアクセスしてみよう
	
	```
	class Person
		attr_reader :name
	end
	```
	
- 変数・定数のスコープを確認してみよう
	
	```
		ローカル変数			 person
		インスタンス変数 	 @person
		クラス変数			 @@person 
		グローバル変数 		 $person
		定数				 Person
		
		
	```
	
- 属性を増やしてみよう
- 
	```
	class Person
		def initialize(name,born = nill)
			@name,@born = name,born
		end
		attr_accessor :born
		
	end
	
	matz.methods.map($.to_s).grep(/born/)
	```
	
- 属性を増やしてみよう(2)


	```
	matz.born = Time.local(1965,4,14)
	dhh = Person.new('dhh',Time.local(1979,10,15))
	
	matz.born
	
	dhh.born
	
	```
- メソッドを作ってみよう
- 
	```
	class Person
		def age
			(Time.now.strftime('%Y%m%d').to_i - @born.strftime('Y%m%d').to_i / 1_00_00
		end
	end
	
	matz.age
	dhh.age
	
	```

- メソッドを上書きしてみよう

	
	```
	matz.to_s
	
	class Person
		def to_s
			"{@name}(#{age})"
		end
	end
	```
	
- インスタンスを比較してみると…
	
	``` 
	person = Marshal.load(Marshal.dump matz)
	
	person == dhh #->false
	person == matz #-> false おかしい
	```
	
	
- 順番を決めよう
	
	```
	class Person
		include Comparable 
		def <=> 0
			@name <=> o.name
		end
	end
	```
	
- Array#sort　してみよう
	
	```
	people = [matz,dhh]
	people.sort
	
	```
	
- 年齢順にsortしてみよう
	
	```
	#若い順
	people.sort_by(&:age)
	
	#年功序列
	people.sort_by{|p| -p.age}
	
	people.sort_by(&:born)
	
	```
	
- Hashのキーにしてみると…

	```
	
	h={matz => "Ruby" ,dhh => "Rails"}
	
	h[matz]
	h[dhh]
	
	key = Marshal.load(Marshal.dump matz)
	
	key == matz  # -> true
	h[key]			# -> nil おかしい
	
	```
	
- hash値を計算しよう	
	
	```
	class Person
		def hash
			[@name,@borb].hash
		end
	end
	```
	
- eql?を上書きしよう
	
	```
	class Person
	 	def eql? o
			[@name,@born].eql? [o.name,o.born]
    		end
    	end
    
    	key.eql? matz
    	key.eql? dhh 
    
	 ```
    
- Hashにアクセスしてみよう
 
 	```
 	h.rehash
 	h[matz]
 	h[dhh]
 	h[key]
 	
 	```
 	
- 等値性のおさらい
 	
 	```
 	
 	==
 	===
 	eql?
 	eqal
 	
 	```
- アクセス制御してみよう
	
	- public
	- protected
	- private
	
	```
		class Person
			protected :born
		end
	
		matz.born
	``` 	

- Structでクラスを作る
	
	```
	Person = Struct.new(:name,:born)
	
	matz = Person.new('dhh',Time.local(1979,10,15))
	
	person = Marshal.load(Marshal.dump matz)
	person == matz
	person == dhh
	
	```
	
- Structなら等値性も
	
	```
	
	h={matz => "Ruby" ,dhh => "Rails"}
	key = Marshal.load(Marshal.dump matz)
	
	h[matz]
	h[dhh]
	h[key]
	
	```
	
- Structでもメソッドを

	```
	class Person
		def age
			(Time.now.strftime('%Y%m%d').to_i - @born.strftime('Y%m%d').to_i / 1_00_00
		end
	end
	
	```
	

- 宿題1
	
	属性として身長、体重を追加しよう。体重は秘密にしよう。

- 宿題2
	
	BMIを計算するメソッドを追加しよう。
		
		BMI　= w/t^2
		
		w = 体重[kg]
		t = 身長[m]
		
- 宿題3
	
	Person#<=>を書き直そう。
	その妥当な仕様は？
	
	```
	
	p0 = Person.new('matz')
	p1 = Person.new('Matz',Time.local(1965,4,14))
	
	p <=> p1
	```
	
- 宿題4
	
	Perso#===を定義しよう。
	その妥当な仕様は？
	
	```
	p0 = Person.new('matz')
	p1 = Person.new('Matz',Time.local(1965,4,14))
	
	p0 === p1
	
	```
	 
