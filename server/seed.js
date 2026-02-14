import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Transaction from './models/Transaction.js';
import connectDB from './config/db.js';

dotenv.config();

const sampleUser = {
  name: 'John Doe',
  email: 'demo@bellcorp.com',
  password: 'demo123',
};

const sampleTransactions = [
  // Food Category
  {
    title: 'Whole Foods Grocery Shopping',
    amount: 4500.00,
    category: 'Food',
    date: new Date('2024-02-10'),
    notes: 'Weekly groceries - organic produce, dairy, and pantry essentials',
  },
  {
    title: 'Starbucks Coffee',
    amount: 450.00,
    category: 'Food',
    date: new Date('2024-02-12'),
    notes: 'Morning latte and croissant',
  },
  {
    title: 'Pizza Hut Dinner',
    amount: 1200.00,
    category: 'Food',
    date: new Date('2024-02-08'),
    notes: 'Friday night dinner with family - large pepperoni pizza',
  },
  {
    title: 'Local Farmers Market',
    amount: 800.00,
    category: 'Food',
    date: new Date('2024-02-05'),
    notes: 'Fresh vegetables, fruits, and homemade bread',
  },

  // Transportation Category
  {
    title: 'Uber to Airport',
    amount: 850.00,
    category: 'Transportation',
    date: new Date('2024-02-01'),
    notes: 'Early morning ride to catch flight',
  },
  {
    title: 'Petrol Fill-up',
    amount: 2500.00,
    category: 'Transportation',
    date: new Date('2024-02-07'),
    notes: 'Full tank - HP Petrol Station',
  },
  {
    title: 'Monthly Metro Pass',
    amount: 800.00,
    category: 'Transportation',
    date: new Date('2024-02-01'),
    notes: 'Delhi Metro unlimited monthly pass',
  },

  // Entertainment Category
  {
    title: 'Netflix Subscription',
    amount: 649.00,
    category: 'Entertainment',
    date: new Date('2024-02-01'),
    notes: 'Monthly streaming subscription - Premium plan',
  },
  {
    title: 'Movie Theater Tickets',
    amount: 800.00,
    category: 'Entertainment',
    date: new Date('2024-02-09'),
    notes: 'Two tickets for latest blockbuster with popcorn',
  },
  {
    title: 'Spotify Premium',
    amount: 119.00,
    category: 'Entertainment',
    date: new Date('2024-02-01'),
    notes: 'Music streaming service - Individual plan',
  },

  // Shopping Category
  {
    title: 'Amazon Online Shopping',
    amount: 3500.00,
    category: 'Shopping',
    date: new Date('2024-02-06'),
    notes: 'Home office supplies, desk organizer, and USB cables',
  },
  {
    title: 'Nike Running Shoes',
    amount: 6500.00,
    category: 'Shopping',
    date: new Date('2024-02-03'),
    notes: 'New Air Max for morning runs',
  },

  // Bills Category
  {
    title: 'Electricity Bill',
    amount: 2200.00,
    category: 'Bills',
    date: new Date('2024-02-01'),
    notes: 'Monthly utility bill - higher due to winter AC usage',
  },
  {
    title: 'Internet & Cable',
    amount: 1500.00,
    category: 'Bills',
    date: new Date('2024-02-01'),
    notes: 'Airtel fiber internet 200mbps + DTH',
  },
  {
    title: 'Mobile Phone Bill',
    amount: 599.00,
    category: 'Bills',
    date: new Date('2024-02-01'),
    notes: 'Jio unlimited data plan',
  },

  // Health Category
  {
    title: 'Gym Membership',
    amount: 2000.00,
    category: 'Health',
    date: new Date('2024-02-01'),
    notes: 'Gold\'s Gym monthly membership with classes',
  },
  {
    title: 'Pharmacy - Medicines',
    amount: 850.00,
    category: 'Health',
    date: new Date('2024-02-11'),
    notes: 'Monthly medication refill - Apollo Pharmacy',
  },

  // Education Category
  {
    title: 'Udemy Online Course',
    amount: 640.00,
    category: 'Education',
    date: new Date('2024-02-04'),
    notes: 'Advanced React & Node.js development course',
  },

  // Travel Category
  {
    title: 'Hotel Booking - Weekend Trip',
    amount: 8500.00,
    category: 'Travel',
    date: new Date('2024-02-02'),
    notes: 'Two nights at Taj Hotel - business conference',
  },

  // Other Category
  {
    title: 'Haircut & Styling',
    amount: 500.00,
    category: 'Other',
    date: new Date('2024-02-08'),
    notes: 'Monthly haircut at local salon',
  },
];

const seedDatabase = async () => {
  try {
    // Connect to database
    await connectDB();

    console.log('🗑️  Clearing existing data...');
    
    // Clear existing data
    await User.deleteMany({});
    await Transaction.deleteMany({});

    console.log('✅ Existing data cleared');

    // Create demo user
    console.log('👤 Creating demo user...');
    
    // Don't manually hash - the User model pre-save hook will handle it
    const user = await User.create({
      name: sampleUser.name,
      email: sampleUser.email,
      password: sampleUser.password, // Model will hash this automatically
    });

    console.log('✅ Demo user created:');
    console.log(`   📧 Email: ${sampleUser.email}`);
    console.log(`   🔑 Password: ${sampleUser.password}`);

    // Create transactions
    console.log('\n💰 Creating sample transactions...');
    
    const transactionsWithUser = sampleTransactions.map(transaction => ({
      ...transaction,
      user: user._id,
    }));

    const createdTransactions = await Transaction.insertMany(transactionsWithUser);

    console.log(`✅ ${createdTransactions.length} transactions created\n`);

    // Display summary
    console.log('📊 DATABASE SUMMARY:');
    console.log('═══════════════════════════════════════');
    
    const totalAmount = sampleTransactions.reduce((sum, t) => sum + t.amount, 0);
    console.log(`💵 Total Expenses: ₹${totalAmount.toFixed(2)}`);
    
    console.log('\n📈 Category Breakdown:');
    const categoryStats = {};
    sampleTransactions.forEach(t => {
      if (!categoryStats[t.category]) {
        categoryStats[t.category] = { count: 0, amount: 0 };
      }
      categoryStats[t.category].count++;
      categoryStats[t.category].amount += t.amount;
    });
    
    Object.entries(categoryStats)
      .sort((a, b) => b[1].amount - a[1].amount)
      .forEach(([category, stats]) => {
        console.log(`   ${category.padEnd(15)} - ${stats.count} transactions - ₹${stats.amount.toFixed(2)}`);
      });

    console.log('\n═══════════════════════════════════════');
    console.log('🎉 Database seeded successfully!');
    console.log('\n🚀 You can now login with:');
    console.log(`   Email: ${sampleUser.email}`);
    console.log(`   Password: ${sampleUser.password}`);
    console.log('═══════════════════════════════════════\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();