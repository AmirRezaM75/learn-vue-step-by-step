<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function create()
    {
        return view('projects.create', ['projects' => Project::all()]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required'
        ]);

        Project::forceCreate([
            'name' => $request->name,
            'description' => $request->description
        ]);

        return response()->json(['message' => 'Project Created']);
    }
}
